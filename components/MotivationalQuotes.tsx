import { Sparkles, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function MotivationalQuote() {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/motivational-quote")
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load quote.");
        setLoading(false);
        console.error(err);
      });
  }, []);
  return (
    <div className="relative bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20 text-white p-8 rounded-xl shadow-2xl mb-8 border border-emerald-500/30 motivational-glow">
      <div className="absolute top-4 left-4">
        <Sparkles className="text-yellow-400 w-6 h-6 animate-pulse" />
      </div>
      <div className="absolute top-4 right-4">
        <Star className="text-yellow-400 w-6 h-6 animate-pulse" />
      </div>

      <div className="flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            ✨ Daily Motivation ✨
          </h2>
          <p className="text-lg leading-relaxed text-slate-200 font-medium italic min-h-[60px]">
            {loading ? (
              <span className="opacity-70">Loading motivational quote...</span>
            ) : error ? (
              <span className="text-red-400">{error}</span>
            ) : (
              <span>{quote}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
