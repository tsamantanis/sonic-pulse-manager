
import { useState, useMemo } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusSelect } from "@/components/StatusSelect"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { SearchAndPagination, PaginationBar } from "@/components/SearchAndPagination"
import { useNavigate } from "react-router-dom"

const Releases = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  const [releases, setReleases] = useState([
    { id: 1, title: "Velaiser Anthem", artist: "Aaron C.", label: "Velais Old Classics", status: "released", cover_image: "/UnseenAlexion-Zenith.png" },
    { id: 2, title: "Midnight Dreams", artist: "Maya Rodriguez", label: "Velais New Wave", status: "ready to sign", cover_image: "/Talal-RiskyBusiness.png" },
    { id: 3, title: "Electric Nights", artist: "DJ Pulse", label: "Velais Electronic", status: "drafting contract", cover_image: "/Michael-Anthony-1Day.png" },
    { id: 4, title: "Ocean Waves", artist: "Sarah Chen", label: "Velais Ambient", status: "released", cover_image: "/UnseenAlexion-Zenith.png" },
    { id: 5, title: "Urban Jungle", artist: "Marcus Johnson", label: "Velais Hip Hop", status: "canceled", cover_image: "/Talal-RiskyBusiness.png" },
    { id: 6, title: "Silent Night", artist: "Emma Thompson", label: "Velais Classical", status: "ready to sign", cover_image: "/Michael-Anthony-1Day.png" },
  ])

  const filteredReleases = useMemo(() => {
    return releases.filter(release => {
      const matchesSearch =
        release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        release.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        release.label.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || release.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [releases, searchTerm, statusFilter])

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
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <SearchAndPagination
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
          <div>
            <Select value={statusFilter} onValueChange={value => {
              setStatusFilter(value)
              setCurrentPage(1)
            }}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="released">Released</SelectItem>
                <SelectItem value="ready to sign">Ready to Sign</SelectItem>
                <SelectItem value="drafting contract">Drafting Contract</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {paginatedReleases.map((release) => (
            <Card key={release.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleReleaseClick(release.id)}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-dark rounded overflow-hidden flex items-center justify-center">
                    <img src={release.cover_image} alt="Logo" className="h-full w-full" />
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
                    variant="outline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Export to Fuga
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination at the bottom */}
        <div className="mt-6 flex justify-end">
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Releases
