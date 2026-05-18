import Link from "next/link"
import { UserFooter } from "./user/userfooter"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
} from "../../../packages/ui/src/components/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        MangaKure
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuBadge>
                    
                </SidebarMenuBadge>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
        <SidebarMenuItem>

        </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserFooter />
      </SidebarFooter>
    </Sidebar>
  )
}