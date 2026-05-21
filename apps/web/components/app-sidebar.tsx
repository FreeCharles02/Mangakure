import Link from "next/link"
import {UserFooter}  from "./user/userfooter"
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
import { auth } from "@/app/auth";

export async function AppSidebar() {
  const session = await auth();
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
        <UserFooter  session={session}/>
      </SidebarFooter>
    </Sidebar>
  )
}