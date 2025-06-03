
import Layout from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Music, TrendingUp, FileText, Share2 } from "lucide-react"

const Tools = () => {
  const tools = [
    {
      icon: Music,
      title: "Audio Analysis",
      description: "Analyze audio quality and metadata of submissions",
      action: "Run Analysis"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track streaming numbers and revenue across platforms",
      action: "View Analytics"
    },
    {
      icon: FileText,
      title: "Contract Generator",
      description: "Generate contracts for artists and releases",
      action: "Create Contract"
    },
    {
      icon: Share2,
      title: "Distribution Manager",
      description: "Manage distribution to streaming platforms",
      action: "Manage Distribution"
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Tools</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <tool.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
                  {tool.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tools
