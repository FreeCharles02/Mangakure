import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";
import { SidebarProvider, SidebarTrigger } from "../../../packages/ui/src/components/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import { Providers } from "@/components/user/sessionprovider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
  
      <SidebarProvider>
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
      >
        <AppSidebar />
      
      <body>
        <SidebarTrigger />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    
    </html>
      </SidebarProvider>
  )
}
