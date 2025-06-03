
import Layout from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Music, Upload, Users, TrendingUp, Download } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  const recentSubmissions = [
    { id: 1, artist: "Aaron C.", track: "Velaiser Anthem", status: "Submitted", file: "Audio File.mp3" },
    { id: 2, artist: "Aaron C.", track: "Velaiser Anthem", status: "Submitted", file: "Audio File.wav" },
    { id: 3, artist: "Aaron C.", track: "Velaiser Anthem", status: "Submitted", file: "Audio File.mp3" },
  ]

  const recentReleases = [
    { id: 1, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
    { id: 2, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
    { id: 3, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
  ]

  const artists = [
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation." },
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation." },
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation." },
  ]

  const handleReleaseClick = (releaseId: number) => {
    navigate(`/releases/${releaseId}`)
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Submissions Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Submissions</h2>
            <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
              View Submissions
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="space-y-1">
                <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-muted-foreground border-b">
                  <span>Artist</span>
                  <span>Track</span>
                  <span>Status</span>
                  <span>Audio File</span>
                  <span>Download</span>
                </div>
                {recentSubmissions.map((submission) => (
                  <div key={submission.id} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-sm font-medium">
                        AC
                      </div>
                      <span>{submission.artist}</span>
                    </div>
                    <span>{submission.track}</span>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 w-fit">
                      {submission.status}
                    </Badge>
                    <span className="text-blue-600">{submission.file}</span>
                    <Button variant="ghost" size="sm" className="w-fit">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Releases Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Releases</h2>
            <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
              View Releases
            </Button>
          </div>

          <div className="space-y-4">
            {recentReleases.map((release) => (
              <Card key={release.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleReleaseClick(release.id)}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-dark rounded flex items-center justify-center">
                      <div className="w-12 h-12 bg-brand-green rounded opacity-80"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{release.title}</h3>
                      <p className="text-sm text-muted-foreground">{release.artist}</p>
                      <p className="text-sm text-muted-foreground">{release.label}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {release.status}
                    </Badge>
                    <Button 
                      className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Export to Fuga
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Artists Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Artists</h2>
            <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
              View Artists
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-medium">
                      FP
                    </div>
                    <div>
                      <h3 className="font-semibold">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Bio</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{artist.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Social + DSP Links</h4>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-pink-200 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                        <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
