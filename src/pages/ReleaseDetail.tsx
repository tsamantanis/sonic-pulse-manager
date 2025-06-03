
import Layout from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Music, Upload, TrendingUp, DollarSign } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 180 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 300 },
  { name: 'Jul', value: 350 },
]

const ReleaseDetail = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Releases</span>
            <span>></span>
            <span>Velaiser Anthem</span>
          </div>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-black rounded-full">
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
                  <div className="w-20 h-20 bg-brand-dark rounded flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-green rounded opacity-80"></div>
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
                    <div className="w-3/4 h-3/4 bg-brand-green rounded opacity-80"></div>
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
                </CardHeader>
                <CardContent>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Line type="monotone" dataKey="value" stroke="#06FF01" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Line type="monotone" dataKey="value" stroke="#06FF01" strokeWidth={2} dot={false} />
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
                  <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Generate a Pre-save link</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Generate a Pitch with AI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Get Amelig quote</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Draft Marketing Campaign</span>
                  </div>
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
                  <h4 className="font-medium mb-2">Labore sint in velit.</h4>
                  <Textarea 
                    className="min-h-[120px] resize-none"
                    defaultValue="Labore sint in velit veniam laboris in sint magna cunt reprehenderit sint irure. Laboris reprehenderit voluptate tempor sit adipisicing. In fugiat consectetur quis labore dolor irure cupidatat ullamco velit occaecat adipisicing sit irure. Adipisicing ullamco ex qui enim sit exercitation nostrud."
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
