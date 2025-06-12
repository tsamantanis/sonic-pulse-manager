
import { useState, useMemo } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusSelect } from "@/components/StatusSelect"
import { SearchAndPagination, PaginationBar } from "@/components/SearchAndPagination"
import { Download } from "lucide-react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

const Submissions = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  const [submissions, setSubmissions] = useState([
    { id: 1, artist: "Aaron C.", track: "Velaiser Anthem", status: "submitted", file: "Audio File.mp3" },
    { id: 2, artist: "Maya Rodriguez", track: "Midnight Dreams", status: "accepted", file: "Audio File.wav" },
    { id: 3, artist: "DJ Pulse", track: "Electric Nights", status: "rejected", file: "Audio File.mp3" },
    { id: 4, artist: "Sarah Chen", track: "Ocean Waves", status: "submitted", file: "Audio File.wav" },
    { id: 5, artist: "Marcus Johnson", track: "Urban Jungle", status: "accepted", file: "Audio File.mp3" },
    { id: 6, artist: "Emma Thompson", track: "Silent Night", status: "submitted", file: "Audio File.wav" },
    { id: 7, artist: "Alex Rivera", track: "Digital Dreams", status: "rejected", file: "Audio File.mp3" },
    { id: 8, artist: "Luna Park", track: "Cosmic Dance", status: "submitted", file: "Audio File.wav" },
  ])

  const filteredSubmissions = useMemo(() => {
    return submissions.filter(submission => {
      const matchesSearch =
        submission.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.track.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || submission.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [submissions, searchTerm, statusFilter])

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedSubmissions = filteredSubmissions.slice(startIndex, startIndex + itemsPerPage)

  const handleStatusChange = (id: number, newStatus: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    ))
  }

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Submissions</h1>

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
              {paginatedSubmissions.map((submission) => (
                <div key={submission.id} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-sm font-medium">
                      {submission.artist.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{submission.track}</div>
                      <div className="text-sm text-muted-foreground">{submission.artist}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <StatusSelect
                      value={submission.status}
                      onChange={(newStatus) => handleStatusChange(submission.id, newStatus)}
                      type="submission"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600">{submission.file}</span>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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

export default Submissions
