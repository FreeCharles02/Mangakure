'use client'
import { LogIn, LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../packages/ui/src/components/avatar"
import { Button } from "../../../../packages/ui/src/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../packages/ui/src/components/dropdown-menu"

import { useSession, signIn, signOut } from "next-auth/react";
import { auth } from "@/app/auth"

// Mock user data - replace with your auth state (e.g., NextAuth, Clerk, Supabase)
const user = {
  name: "Alex Morgan",
  email: "alex@example.com",
  avatar: "https://github.com/shadcn.png", 
}
const session = await auth();
export async function UserFooter() {
  return (
    <div className="mt-auto border-t p-4 bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 px-2 h-12 hover:bg-accent focus-visible:ring-0"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">AM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left text-sm leading-tight truncate flex-1">
              <span className="font-semibold truncate w-full">{user.name}</span>
              <span className="text-xs text-muted-foreground truncate w-full">{user.email}</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56" align="end" side="top" sideOffset={8}>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            {session ? 
            <>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            </>
              : 
              <>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Log in</span>
              </>
              }
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}