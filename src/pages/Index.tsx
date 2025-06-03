
import { useState } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusSelect } from "@/components/StatusSelect"
import { Download, Instagram, Spotify, Youtube } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  const [submissions, setSubmissions] = useState([
    { id: 1, artist: "Aaron C.", track: "Velaiser Anthem", status: "submitted", file: "Audio File.mp3" },
    { id: 2, artist: "Maya Rodriguez", track: "Midnight Dreams", status: "accepted", file: "Audio File.wav" },
    { id: 3, artist: "DJ Pulse", track: "Electric Nights", status: "rejected", file: "Audio File.mp3" },
  ])

  const [releases, setReleases] = useState([
    { id: 1, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "released" },
    { id: 2, title: "Midnight Dreams", artist: "Maya Rodriguez", label: "Velais New Wave", status: "ready to sign" },
    { id: 3, title: "Electric Nights", artist: "DJ Pulse", label: "Velais Electronic", status: "drafting contract" },
  ])

  const artists = [
    { 
      name: "Aaron C.", 
      email: "aaron@example.com", 
      bio: "Electronic music producer specializing in ambient and experimental sounds. Known for creating immersive soundscapes that blend organic and synthetic elements.",
      social: ["instagram", "spotify", "youtube"]
    },
    { 
      name: "Maya Rodriguez", 
      email: "maya@example.com", 
      bio: "Singer-songwriter with a passion for indie folk and acoustic arrangements. Her music explores themes of love, loss, and personal growth through intimate storytelling.",
      social: ["instagram", "spotify"]
    },
    { 
      name: "DJ Pulse", 
      email: "djpulse@example.com", 
      bio: "High-energy electronic dance music producer and DJ. Specializes in progressive house and techno with influences from underground club culture worldwide.",
      social: ["instagram", "youtube"]
    },
  ]

  const handleReleaseClick = (releaseId: number) => {
    navigate(`/releases/${releaseId}`)
  }

  const handleSubmissionStatusChange = (id: number, newStatus: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    ))
  }

  const handleReleaseStatusChange = (id: number, newStatus: string) => {
    setReleases(prev => prev.map(rel => 
      rel.id === id ? { ...rel, status: newStatus } : rel
    ))
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "instagram": return <Instagram className="w-6 h-6 text-pink-500" />
      case "spotify": return <Spotify className="w-6 h-6 text-green-500" />
      case "youtube": return <Youtube className="w-6 h-6 text-red-500" />
      default: return <div className="w-6 h-6 bg-gray-300 rounded-full" />
    }
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Submissions Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Submissions</h2>
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full"
              onClick={() => navigate("/submissions")}
            >
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
                {submissions.map((submission) => (
                  <div key={submission.id} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-sm font-medium">
                        {submission.artist.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span>{submission.artist}</span>
                    </div>
                    <span>{submission.track}</span>
                    <StatusSelect
                      value={submission.status}
                      onChange={(newStatus) => handleSubmissionStatusChange(submission.id, newStatus)}
                      type="submission"
                    />
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
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full"
              onClick={() => navigate("/releases")}
            >
              View Releases
            </Button>
          </div>

          <div className="space-y-4">
            {releases.map((release) => (
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
                    <div onClick={(e) => e.stopPropagation()}>
                      <StatusSelect
                        value={release.status}
                        onChange={(newStatus) => handleReleaseStatusChange(release.id, newStatus)}
                        type="release"
                      />
                    </div>
                    <Button 
                      className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full"
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
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full"
              onClick={() => navigate("/artists")}
            >
              View Artists
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-medium">
                      {artist.name.split(' ').map(n => n[0]).join('')}
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
                        {artist.social.map((platform, idx) => (
                          <div key={idx}>
                            {getSocialIcon(platform)}
                          </div>
                        ))}
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
