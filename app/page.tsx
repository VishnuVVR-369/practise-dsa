import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Dashboard from "@/components/Dashboard"
import Revise from "@/components/Revise"

export default async function Home() {
  return (
    <main className="container mx-auto flex items-center flex-col h-screen">
      <h1 className="text-5xl font-bold mb-4 mt-16 color-text-primary">Learn DSA the right way</h1>
      <h4 className="text-2xl text-muted-foreground mb-4 color-text-secondary">
        Your personalised DSA Progress Dashboard
      </h4>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="dashboard" className="cursor-pointer">Dashboard</TabsTrigger>
          <TabsTrigger value="revise" className="cursor-pointer">Revise</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard"><Dashboard /></TabsContent>
        <TabsContent value="revise"><Revise /></TabsContent>
      </Tabs>
    </main>
  );
}
