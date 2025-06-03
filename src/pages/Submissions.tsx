
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

const Submissions = () => {
  const submissions = [
    { id: 1, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 2, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 3, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 4, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 5, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 6, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 7, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
    { id: 8, artist: "Aaron C.", track: "Velaiser Anthem", status: "Under Review", file: "Audio File.mp3" },
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Submissions</h1>

        <Card>
          <CardContent className="p-0">
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-muted-foreground border-b bg-gray-50">
                <span>Artist Name</span>
                <span>Status</span>
                <span>Audio File</span>
                <span>Download</span>
                <span></span>
              </div>
              
              {/* Submissions */}
              {submissions.map((submission) => (
                <div key={submission.id} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-sm font-medium">
                      AC
                    </div>
                    <div>
                      <div className="font-medium">{submission.track}</div>
                      <div className="text-sm text-muted-foreground">{submission.artist}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      {submission.status}
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600">{submission.file}</span>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      Download
                    </Button>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full w-10 h-10">1</Button>
          <Button variant="outline" className="rounded-full w-10 h-10">2</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Submissions
