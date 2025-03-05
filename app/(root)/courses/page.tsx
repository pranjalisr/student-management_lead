import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Filter, GraduationCap, Plus, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your course catalog</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md self-start sm:self-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
              Total Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="mr-2 h-4 w-4 text-blue-500" />
              Active Enrollments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+156 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="mr-2 h-4 w-4 text-blue-500" />
              Average Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 weeks</div>
            <p className="text-xs text-muted-foreground">Per course completion</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search courses..." className="pl-8 rounded-full" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-full">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList className="bg-blue-50 dark:bg-blue-950 p-1 rounded-full w-fit">
          <TabsTrigger value="all" className="rounded-full">
            All Courses
          </TabsTrigger>
          <TabsTrigger value="active" className="rounded-full">
            Active
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="rounded-full">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="archived" className="rounded-full">
            Archived
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative">
                  <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{course.name}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        course.status === "Active"
                          ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-950"
                          : course.status === "Upcoming"
                            ? "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950"
                            : "border-yellow-500 text-yellow-600 bg-yellow-50 dark:bg-yellow-950"
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="mr-1 h-4 w-4" />
                      {course.level}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="w-full rounded-full" asChild>
                      <Link href={`/courses/${course.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" className="w-full rounded-full">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const courses = [
  {
    id: "1",
    name: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript",
    image: "/placeholder.svg?height=400&width=600",
    duration: "12 weeks",
    students: 234,
    level: "Beginner",
    status: "Active",
  },
  {
    id: "2",
    name: "Advanced React & Next.js",
    description: "Master modern React development with Next.js framework",
    image: "/placeholder.svg?height=400&width=600",
    duration: "10 weeks",
    students: 189,
    level: "Advanced",
    status: "Active",
  },
  {
    id: "3",
    name: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and experience design",
    image: "/placeholder.svg?height=400&width=600",
    duration: "8 weeks",
    students: 156,
    level: "Intermediate",
    status: "Active",
  },
  {
    id: "4",
    name: "Data Science Essentials",
    description: "Introduction to data science and machine learning",
    image: "/placeholder.svg?height=400&width=600",
    duration: "14 weeks",
    students: 178,
    level: "Beginner",
    status: "Upcoming",
  },
  {
    id: "5",
    name: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android",
    image: "/placeholder.svg?height=400&width=600",
    duration: "16 weeks",
    students: 145,
    level: "Intermediate",
    status: "Active",
  },
  {
    id: "6",
    name: "Cloud Computing Fundamentals",
    description: "Learn cloud services and deployment strategies",
    image: "/placeholder.svg?height=400&width=600",
    duration: "10 weeks",
    students: 112,
    level: "Beginner",
    status: "Upcoming",
  },
]

