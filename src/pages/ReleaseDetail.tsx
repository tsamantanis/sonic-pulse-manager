
import { useState } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Music, Check } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const streamsData = [
  { name: 'Jan', value: 15420, revenue: 123.36 },
  { name: 'Feb', value: 18750, revenue: 150.00 },
  { name: 'Mar', value: 22100, revenue: 176.80 },
  { name: 'Apr', value: 19800, revenue: 158.40 },
  { name: 'May', value: 25600, revenue: 204.80 },
  { name: 'Jun', value: 31200, revenue: 249.60 },
  { name: 'Jul', value: 35800, revenue: 286.40 },
]

const revenueData = [
  { name: 'Jan', value: 123.36 },
  { name: 'Feb', value: 150.00 },
  { name: 'Mar', value: 176.80 },
  { name: 'Apr', value: 158.40 },
  { name: 'May', value: 204.80 },
  { name: 'Jun', value: 249.60 },
  { name: 'Jul', value: 286.40 },
]

const ReleaseDetail = () => {
  const [actionItems, setActionItems] = useState([
    { id: 1, text: "Generate a Pre-save link", completed: true },
    { id: 2, text: "Generate a Pitch with AI", completed: false },
    { id: 3, text: "Get Ampligo quote", completed: false },
    { id: 4, text: "Draft Marketing Campaign", completed: false },
  ])

  const toggleActionItem = (id: number) => {
    setActionItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const StreamsTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-brand-green">
            Streams: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-blue-600">
            Revenue: ${payload[0].payload.revenue}
          </p>
        </div>
      )
    }
    return null
  }

  const RevenueTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-brand-green">
            Revenue: ${payload[0].value}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Releases</span>
            <span>&gt;</span>
            <span className="text-primary">Velaiser Anthem</span>
          </div>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full">
            Export to Fuga
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Release Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-brand-dark rounded overflow-hidden flex items-center justify-center">
                    <img src="/UnseenAlexion-Zenith.png" alt="Velaiser Anthem Cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold">Velaiser Anthem</h1>
                    <p className="text-muted-foreground">Velais Old Classics</p>
                    <p className="text-sm text-muted-foreground">Aaron C.</p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div>
                    <span className="text-sm font-medium">Status</span>
                    <div className="mt-1">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        Released
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium">Distribution Date</span>
                    <p className="text-sm text-muted-foreground mt-1">25.09.2025</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium">Audio Tags</span>
                    <div className="flex gap-2 mt-1">
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Upbeat</Badge>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Dance</Badge>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium">Contract</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-blue-600 text-sm">Velaiser Anthem Contract.pdf</span>
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assets */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Assets</CardTitle>
                <Button variant="outline" className="rounded-full">
                  Upload Asset
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-brand-dark rounded flex items-center justify-center">
                    <img src="/UnseenAlexion-Zenith.png" alt="Velaiser Anthem Cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                    <Music className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Number of Streams</CardTitle>
                  <p className="text-2xl font-bold text-brand-green">168,670</p>
                </CardHeader>
                <CardContent>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={streamsData}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip content={<StreamsTooltip />} />
                        <Line type="monotone" dataKey="value" stroke="#00CC00" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Revenue</CardTitle>
                  <p className="text-2xl font-bold text-brand-green">$1,349.36</p>
                </CardHeader>
                <CardContent>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip content={<RevenueTooltip />} />
                        <Line type="monotone" dataKey="value" stroke="#00CC00" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {actionItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                        item.completed 
                          ? "bg-green-50 border-green-200" 
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => toggleActionItem(item.id)}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        item.completed ? "bg-green-500" : "bg-gray-300"
                      }`}></div>
                      <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                        {item.text}
                      </span>
                      {item.completed && <Check className="h-4 w-4 text-green-500 ml-auto" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CardTitle>Notes</CardTitle>
                <Edit className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-medium mb-2">Release Performance Notes</h4>
                  <Textarea 
                    className="min-h-[120px] resize-none"
                    defaultValue="The Velaiser Anthem has performed exceptionally well across all streaming platforms. Strong engagement from the electronic music community with particularly high performance on Spotify and Apple Music. Consider similar releases for Q4 based on this success pattern."
                    readOnly
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReleaseDetail
