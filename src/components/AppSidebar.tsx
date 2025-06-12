
import { Home, Upload, Music, Users, Wrench } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Submissions", url: "/submissions", icon: Upload },
  { title: "Releases", url: "/releases", icon: Music },
  { title: "Artists", url: "/artists", icon: Users },
  { title: "Tools", url: "/tools", icon: Wrench },
]

export function AppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className="w-60">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Menu</SidebarGroupLabel> */}
          <SidebarGroupContent>
            {/* Add Logo */}
            <div className="flex items-center justify-start mb-4">
              <img src="/logo.svg" alt="Logo" className="h-20 w-20 rounded-full" />
            </div>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`${((item.url === "/" && currentPath === "/") || (item.url !== "/" && currentPath.startsWith(item.url))) ? "bg-muted text-primary font-medium" : "text-foreground hover:bg-muted/50"}`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
