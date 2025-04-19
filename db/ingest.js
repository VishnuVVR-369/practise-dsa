const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { MongoClient } = require("mongodb");
const { problems } = require("./problems");

const uri = process.env.DATABASE_URL;
const dbName = "practise-dsa";
const collectionName = "problems";

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function ingest() {
  const client = new MongoClient(uri);
  for (let i = 0; i < problems.length; i++) {
    problems[i].dateSolved = null;
  }
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const chunks = chunkArray(problems, 100);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      try {
        const result = await collection.insertMany(chunk);
        console.log(
          `Inserted chunk ${i + 1}/${chunks.length}: ${
            result.insertedCount
          } documents.`
        );
      } catch (err) {
        console.error(`Error inserting chunk ${i + 1}:`, err);
        break;
      }
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

ingest();
