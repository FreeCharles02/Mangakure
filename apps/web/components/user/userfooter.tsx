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

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth"

export function UserFooter({session}: {session: Session | null}) {
  return (
    <div className="mt-auto border-t p-4 bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 px-2 h-12 hover:bg-accent focus-visible:ring-0"
          >
            <Avatar className="h-9 w-9">
              {session ? 
              <AvatarImage src={session.user?.image || undefined} alt={session.user?.image || "User avatar"} />
              : <AvatarImage src={undefined} alt="Not logged in" /> }
              <AvatarFallback className="rounded-lg">AM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left text-sm leading-tight truncate flex-1">
              {session ? 
              <>
              <span className="font-semibold truncate w-full">{session.user?.name}</span>
              <span className="text-xs text-muted-foreground truncate w-full">{session.user?.email}</span>
              </>
              : 
              <>
              <span className="font-semibold truncate w-full">
                <p>
                  Account
                </p>
              </span>
              </>
              }
            </div>
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56" align="end" side="top" sideOffset={8}>
          <DropdownMenuLabel className="font-normal">
            {session ? 
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session.user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{session.user?.email}</p>
            </div>
            : 
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Login or make an account to start trading! </p>
            </div>
            }
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => {
              if (session) {
                // nothing for now
              } else {
                signIn();
              }
            }}>
              {session ? 
              <>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              </>
             : 
             <>
            <LogIn className="mr-2 h-4 w-4"/>
            <span>Log In</span>
             </> }
            </DropdownMenuItem>
            <DropdownMenuItem>
              {session ?
              <>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              </> 
             : 
             <>
             <LogIn className="mr-2 h-4 w-4" />
             <span>Sign Up</span>
             </>                        
             }
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
            {session ? 
          <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>   
              : 
              null
              }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )}