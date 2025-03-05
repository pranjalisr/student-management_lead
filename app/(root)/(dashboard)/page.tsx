import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, GraduationCap, Users, ArrowUpRight, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your student management dashboard</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full">
            <CalendarDays className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md">
            <GraduationCap className="mr-2 h-4 w-4" />
            New Enrollment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="bg-blue-50 dark:bg-blue-950 p-1 rounded-full w-fit">
          <TabsTrigger value="overview" className="rounded-full">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-full">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="rounded-full">
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <div className="flex items-center mt-1">
                  <Badge
                    variant="outline"
                    className="text-green-600 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                  >
                    +12%
                  </Badge>
                  <p className="text-xs text-muted-foreground ml-2">from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <div className="flex items-center mt-1">
                  <Badge
                    variant="outline"
                    className="text-green-600 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                  >
                    +2
                  </Badge>
                  <p className="text-xs text-muted-foreground ml-2">new batches this week</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">Next 7 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-7 max-w-7xl mx-auto">
            <Card className="md:col-span-4 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Recent Batches</CardTitle>
                <CardDescription>Overview of your most recent batches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentBatches.map((batch) => (
                    <div key={batch.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                          {batch.name.substring(0, 2)}
                        </div>
                        <div>
                          <h3 className="font-medium">{batch.name}</h3>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">{batch.students} students</p>
                            <span className="text-xs">•</span>
                            <Badge
                              variant="outline"
                              className={`
                              ${batch.status === "Active" ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-950" : ""}
                              ${batch.status === "Upcoming" ? "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950" : ""}
                            `}
                            >
                              {batch.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <Link href={`/batches/${batch.id}/students`}>
                          <span>View</span>
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/batches">View all batches</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-3 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Top Teachers</CardTitle>
                <CardDescription>Teachers with highest student ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topTeachers.map((teacher) => (
                    <div key={teacher.id} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-blue-200 dark:border-blue-700">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt={teacher.name} />
                        <AvatarFallback>{getInitials(teacher.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm">{teacher.name}</h3>
                        <p className="text-xs text-muted-foreground">{teacher.subject}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={teacher.rating * 10} className="h-1.5" />
                          <span className="text-xs font-medium">{teacher.rating}/10</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/teachers">View all teachers</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Schedule for the next 7 days</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="rounded-full">
                  View all
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-medium text-muted-foreground">{event.day}</div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold">
                          {event.date}
                        </div>
                      </div>
                      <div className="flex-1 border-l pl-3">
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Course Popularity</CardTitle>
                  <CardDescription>Most popular courses by enrollment</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="rounded-full">
                  View all
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularCourses.map((course, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            {index === 0 ? (
                              <BookOpen className="h-3 w-3 text-blue-600" />
                            ) : index === 1 ? (
                              <BarChart3 className="h-3 w-3 text-indigo-600" />
                            ) : (
                              <GraduationCap className="h-3 w-3 text-purple-600" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{course.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{course.students} students</span>
                      </div>
                      <Progress value={course.popularity} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed analytics about your students and batches</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports about student performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reports content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

// Mock data
const recentBatches = [
  { id: "1", name: "Web Development Batch 2023", students: 42, status: "Active" },
  { id: "2", name: "Data Science Fundamentals", students: 38, status: "Active" },
  { id: "3", name: "UI/UX Design Masterclass", students: 25, status: "Active" },
  { id: "4", name: "Mobile App Development", students: 30, status: "Upcoming" },
]

const topTeachers = [
  { id: "1", name: "Dr. Sarah Johnson", subject: "Computer Science", rating: 9.5 },
  { id: "2", name: "Prof. Michael Chen", subject: "Mathematics", rating: 9.2 },
  { id: "3", name: "Dr. Emily Rodriguez", subject: "Design", rating: 8.9 },
  { id: "4", name: "Prof. David Wilson", subject: "Business", rating: 8.7 },
]

const upcomingEvents = [
  { day: "MON", date: "12", title: "Web Development Workshop", time: "10:00 AM - 12:00 PM" },
  { day: "TUE", date: "13", title: "Data Science Seminar", time: "2:00 PM - 4:00 PM" },
  { day: "WED", date: "14", title: "UI/UX Design Review", time: "11:00 AM - 1:00 PM" },
  { day: "FRI", date: "16", title: "Mobile App Development Demo", time: "3:00 PM - 5:00 PM" },
]

const popularCourses = [
  { name: "Web Development", students: 245, popularity: 85 },
  { name: "Data Science", students: 210, popularity: 75 },
  { name: "UI/UX Design", students: 180, popularity: 65 },
]

