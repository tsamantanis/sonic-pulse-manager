
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

const Releases = () => {
  const navigate = useNavigate()
  
  const releases = [
    { id: 1, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
    { id: 2, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
    { id: 3, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "Published" },
  ]

  const handleReleaseClick = (releaseId: number) => {
    navigate(`/releases/${releaseId}`)
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Releases</h1>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
            View Releases
          </Button>
        </div>

        <div className="space-y-4">
          {releases.map((release) => (
            <Card key={release.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleReleaseClick(release.id)}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-dark rounded flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-green rounded opacity-80"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{release.title}</h3>
                    <p className="text-muted-foreground">{release.artist}</p>
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
    </Layout>
  )
}

export default Releases
