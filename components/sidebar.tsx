"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  GraduationCap,
  Home,
  LogOut,
  Settings,
  Users,
  ClapperboardIcon as ChalkboardTeacher,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./mode-toggle"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <SidebarProvider>
      <ShadcnSidebar className="border-r border-blue-100 dark:border-blue-900 w-[240px]">
        <SidebarHeader className="flex items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leadlly
            </span>
          </div>
          <SidebarTrigger className="ml-auto md:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <div className="px-4 py-2">
            <div className="flex items-center gap-3 px-2 py-3 mb-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Avatar className="h-10 w-10 border-2 border-blue-200 dark:border-blue-700">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-sm">Admin User</span>
                <span className="text-xs text-muted-foreground">admin@leadlly.com</span>
              </div>
            </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/")} className="group">
                <Link href="/">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Home className="h-4 w-4" />
                  </div>
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/batches")} className="group">
                <Link href="/batches">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Batches</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/teachers")} className="group">
                <Link href="/teachers">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <ChalkboardTeacher className="h-4 w-4" />
                  </div>
                  <span>Teachers</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/courses")} className="group">
                <Link href="/courses">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span>Courses</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/settings")} className="group">
                <Link href="/settings">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-4 py-2 flex justify-between items-center">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <ModeToggle />
            <Button variant="outline" size="icon" className="rounded-full">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </ShadcnSidebar>
    </SidebarProvider>
  )
}

