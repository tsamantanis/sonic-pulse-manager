
import { useState, useMemo } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusSelect } from "@/components/StatusSelect"
import { SearchAndPagination } from "@/components/SearchAndPagination"
import { useNavigate } from "react-router-dom"

const Releases = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const [releases, setReleases] = useState([
    { id: 1, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "released" },
    { id: 2, title: "Midnight Dreams", artist: "Maya Rodriguez", label: "Velais New Wave", status: "ready to sign" },
    { id: 3, title: "Electric Nights", artist: "DJ Pulse", label: "Velais Electronic", status: "drafting contract" },
    { id: 4, title: "Ocean Waves", artist: "Sarah Chen", label: "Velais Ambient", status: "released" },
    { id: 5, title: "Urban Jungle", artist: "Marcus Johnson", label: "Velais Hip Hop", status: "canceled" },
    { id: 6, title: "Silent Night", artist: "Emma Thompson", label: "Velais Classical", status: "ready to sign" },
  ])

  const filteredReleases = useMemo(() => {
    return releases.filter(release => 
      release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [releases, searchTerm])

  const totalPages = Math.ceil(filteredReleases.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedReleases = filteredReleases.slice(startIndex, startIndex + itemsPerPage)

  const handleReleaseClick = (releaseId: number) => {
    navigate(`/releases/${releaseId}`)
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setReleases(prev => prev.map(rel => 
      rel.id === id ? { ...rel, status: newStatus } : rel
    ))
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Releases</h1>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full">
            View Releases
          </Button>
        </div>

        <SearchAndPagination
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <div className="space-y-4">
          {paginatedReleases.map((release) => (
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
                  <div onClick={(e) => e.stopPropagation()}>
                    <StatusSelect
                      value={release.status}
                      onChange={(newStatus) => handleStatusChange(release.id, newStatus)}
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
    </Layout>
  )
}

export default Releases
