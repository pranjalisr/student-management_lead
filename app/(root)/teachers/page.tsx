import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

export default function TeachersPage() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground">Manage your teaching staff</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          Add Teacher
        </Button>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search teachers..."
              className="pl-8 rounded-full border-blue-200 focus-visible:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
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

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList className="mb-4">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" className="gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              Sort
            </Button>
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
              {teachers.map((teacher) => (
                <Card
                  key={teacher.id}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-blue-100 dark:border-blue-900"
                >
                  <CardHeader className="p-0">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                      <div className="absolute -bottom-12 left-4">
                        <Avatar className="h-24 w-24 border-4 border-background">
                          <AvatarImage src={teacher.avatar} alt={teacher.name} />
                          <AvatarFallback>{getInitials(teacher.name)}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-14 pb-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                            {teacher.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{teacher.role}</p>
                        </div>
                        <Badge variant={getBadgeVariant(teacher.status)}>{teacher.status}</Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Department:</span> {teacher.department}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Courses:</span> {teacher.courses}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Students:</span> {teacher.students}
                        </p>
                      </div>
                      <div className="pt-4 flex gap-2">
                        <Button size="sm" variant="outline" className="w-full rounded-full" asChild>
                          <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
                        </Button>
                        <Button size="sm" className="w-full rounded-full bg-blue-500 hover:bg-blue-600">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {teachers.map((teacher) => (
                    <div key={teacher.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={teacher.avatar} alt={teacher.name} />
                        <AvatarFallback>{getInitials(teacher.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{teacher.name}</h3>
                          <Badge variant={getBadgeVariant(teacher.status)}>{teacher.status}</Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground">
                          <p>{teacher.role}</p>
                          <p className="hidden sm:block">•</p>
                          <p>{teacher.department}</p>
                          <p className="hidden sm:block">•</p>
                          <p>{teacher.courses} courses</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="rounded-full" asChild>
                        <Link href={`/teachers/${teacher.id}`}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
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

function getBadgeVariant(status: string): "default" | "secondary" | "outline" {
  switch (status) {
    case "Active":
      return "default"
    case "On Leave":
      return "secondary"
    default:
      return "outline"
  }
}

// Mock data
const teachers = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "Senior Professor",
    department: "Computer Science",
    courses: 3,
    students: 120,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    role: "Associate Professor",
    department: "Mathematics",
    courses: 2,
    students: 85,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    role: "Assistant Professor",
    department: "Design",
    courses: 4,
    students: 150,
    status: "On Leave",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "4",
    name: "Prof. David Wilson",
    role: "Visiting Professor",
    department: "Business",
    courses: 2,
    students: 90,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    role: "Senior Lecturer",
    department: "Computer Science",
    courses: 3,
    students: 110,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "6",
    name: "Prof. James Anderson",
    role: "Department Head",
    department: "Mathematics",
    courses: 1,
    students: 45,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "7",
    name: "Dr. Olivia Martinez",
    role: "Research Professor",
    department: "Computer Science",
    courses: 2,
    students: 75,
    status: "On Leave",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    id: "8",
    name: "Prof. Robert Kim",
    role: "Adjunct Professor",
    department: "Design",
    courses: 3,
    students: 95,
    status: "Active",
    avatar: "/placeholder.svg?height=96&width=96",
  },
]

