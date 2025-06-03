
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Artists = () => {
  const artists = [
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation. Nostrud adipisicing anim lorem magna suscipit est reprehenderit qui cupidatat proident nulla Lorem reprehenderit et labore." },
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation. Nostrud adipisicing anim lorem magna suscipit est reprehenderit qui cupidatat proident nulla Lorem reprehenderit et labore." },
    { name: "Artist Name", email: "email@address.com", bio: "Mollit ex et ipsum deserunt magna duis velit ea aliquip dolore eu officia. Amet pariatur dolore dolor caveut veniam sint aliquip exercitation. Nostrud adipisicing anim lorem magna suscipit est reprehenderit qui cupidatat proident nulla Lorem reprehenderit et labore." },
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artists</h1>
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
    </Layout>
  )
}

export default Artists
