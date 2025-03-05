import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Download, Filter, Plus, Search, SlidersHorizontal, Users } from "lucide-react"
import Link from "next/link"

export default function BatchesPage() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Batches</h1>
          <p className="text-muted-foreground">Manage your student batches</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md self-start sm:self-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Batch
        </Button>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="mr-2 h-4 w-4 text-blue-500" />
              Total Batches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="mr-2 h-4 w-4 text-blue-500" />
              Active Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+86 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <CalendarDays className="mr-2 h-4 w-4 text-blue-500" />
              Upcoming Batches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Starting next month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList className="bg-blue-50 dark:bg-blue-950 p-1 rounded-full">
            <TabsTrigger value="all" className="rounded-full">
              All Batches
            </TabsTrigger>
            <TabsTrigger value="active" className="rounded-full">
              Active
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="rounded-full">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="rounded-full">
              Completed
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="rounded-full">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search batches..."
              className="pl-8 rounded-full border-blue-200 focus-visible:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="students-high">Most Students</SelectItem>
                <SelectItem value="students-low">Least Students</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Batches</CardTitle>
                  <CardDescription>A list of all your batches and their details</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Batch Name</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {batches.map((batch) => (
                    <TableRow
                      key={batch.id}
                      className="hover:bg-blue-50/50 dark:hover:bg-blue-950/50 transition-colors"
                    >
                      <TableCell className="font-medium">{batch.name}</TableCell>
                      <TableCell>{batch.students}</TableCell>
                      <TableCell>{batch.startDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`
                            ${batch.status === "Active" ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-950" : ""}
                            ${batch.status === "Upcoming" ? "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950" : ""}
                            ${batch.status === "Completed" ? "border-gray-500 text-gray-600 bg-gray-50 dark:bg-gray-950" : ""}
                          `}
                        >
                          {batch.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{batch.teacher}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <SlidersHorizontal className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full" asChild>
                            <Link href={`/batches/${batch.id}/students`}>View students</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Batches</CardTitle>
              <CardDescription>Currently running batches</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Active batches content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Batches</CardTitle>
              <CardDescription>Batches that will start soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Upcoming batches content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Batches</CardTitle>
              <CardDescription>Batches that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Completed batches content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Mock data
const batches = [
  {
    id: "1",
    name: "Web Development Batch 2023",
    students: 42,
    startDate: "Jan 15, 2023",
    status: "Active",
    teacher: "Dr. Sarah Johnson",
  },
  {
    id: "2",
    name: "Data Science Fundamentals",
    students: 38,
    startDate: "Feb 10, 2023",
    status: "Active",
    teacher: "Prof. Michael Chen",
  },
  {
    id: "3",
    name: "UI/UX Design Masterclass",
    students: 25,
    startDate: "Mar 5, 2023",
    status: "Active",
    teacher: "Dr. Emily Rodriguez",
  },
  {
    id: "4",
    name: "Mobile App Development",
    students: 30,
    startDate: "Apr 20, 2023",
    status: "Active",
    teacher: "Prof. David Wilson",
  },
  {
    id: "5",
    name: "Python Programming Basics",
    students: 45,
    startDate: "May 12, 2023",
    status: "Upcoming",
    teacher: "Dr. Lisa Thompson",
  },
  {
    id: "6",
    name: "Advanced JavaScript",
    students: 28,
    startDate: "Jun 5, 2023",
    status: "Upcoming",
    teacher: "Prof. James Anderson",
  },
  {
    id: "7",
    name: "Frontend Development",
    students: 35,
    startDate: "Jul 10, 2023",
    status: "Upcoming",
    teacher: "Dr. Olivia Martinez",
  },
  {
    id: "8",
    name: "Graphic Design Essentials",
    students: 22,
    startDate: "Aug 15, 2023",
    status: "Upcoming",
    teacher: "Prof. Robert Kim",
  },
]

