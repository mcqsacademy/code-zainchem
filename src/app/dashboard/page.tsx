// "use client";
// import { useState } from "react"

// // export default function Dashboard() {
// //     const [authorized, setAuthorized] = useState(false);
// //     const [email, setEmail] = useState<string>("");
// //     const [password, setPassword] = useState<string>("");

// //     const handleSubmit = (event: React.FormEvent) => {
// //         event.preventDefault();
// //         // Handle login logic here
// //         const us =process.env.APP_ADMIN_NAME
// //         const ps =process.env.APP_ADMIN_PASSWORD
// //         console.log('Email:', us );
// //         console.log('Password:', ps);
// //         if(email === us && password === ps)
// //             setAuthorized(true);
// //         else
// //             alert("Invalid credentials");
// //       };

// //     if (!authorized)
// //         return (
// //             <div id="loginform" className="flex justify-center p-10 gap-5">
// //                 <div>
// //                     <input
// //                         id="username"
// //                         placeholder="username"
// //                         className="border"
// //                         type="text"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                     />
// //                 </div>
// //                 <div>
// //                     <input
// //                         id="password"
// //                         placeholder="password"
// //                         className="border"
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                 </div>
// //                 <button type="submit"onClick={handleSubmit}>Login</button>
// //             </div>
// //         );
// //     else
// //         return (
// //             <div>
// //                 <h1>authorized</h1>
// //             </div>
// //         );
// // }
// const AdminPage = () => {
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("")
//     const [error, setError] = useState("");
  
//     const handleSubmit = async (e: React.FormEvent) => {
//       e.preventDefault();
  
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ password , username })
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         // Redirect to the admin dashboard or show admin content
//         window.location.href = "/admin-dashboard";
//       } else {
//         setError(data.message);
//         alert("error logging in")
//       }
//     };
  
//     return (
//       <div>
//         <h1>Admin Login</h1>
//         <form onSubmit={handleSubmit}>
//         <input
//             type="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter username"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter admin password"
//           />
//           <button type="submit">Login</button>
//         </form>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     );
//   };
  
//   export default AdminPage;


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BeakerIcon, BookIcon, ChevronDownIcon, FileTextIcon, HomeIcon, LayoutDashboardIcon, LineChartIcon, MailIcon, MenuIcon, UsersIcon, XIcon } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <Link className="flex items-center" href="#">
            <BeakerIcon className="w-6 h-6 mr-2 text-blue-500" />
            <span className="text-lg font-semibold">Admin Panel</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <XIcon className="w-6 h-6" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <LayoutDashboardIcon className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <FileTextIcon className="w-5 h-5 mr-3" />
                Content
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <UsersIcon className="w-5 h-5 mr-3" />
                Users
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <LineChartIcon className="w-5 h-5 mr-3" />
                Analytics
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <MailIcon className="w-5 h-5 mr-3" />
                Messages
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 border-b">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <MenuIcon className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Prof. Zain Chem" />
                  <AvatarFallback>ZC</AvatarFallback>
                </Avatar>
                <span>Prof. Zain Chem</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <UsersIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Publications</CardTitle>
                <BookIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">123</div>
                <p className="text-xs text-muted-foreground">+2 new this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <LineChartIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,678</div>
                <p className="text-xs text-muted-foreground">+20% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Messages</CardTitle>
                <MailIcon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">2 require attention</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your most recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="flex-1">Updated "Organic Synthesis" course materials</span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="flex-1">Published new research paper</span>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="flex-1">Reviewed graduate student applications</span>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Your schedule for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="flex-1">Chemistry Department Meeting</span>
                      <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span className="flex-1">Guest Lecture: "Advances in Catalysis"</span>
                      <span className="text-sm text-gray-500">Thursday, 2:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="flex-1">Research Symposium</span>
                      <span className="text-sm text-gray-500">Next Monday, All Day</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Website Analytics</CardTitle>
                  <CardDescription>Traffic and engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    [Analytics chart placeholder]
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                  <CardDescription>Download or view your recent reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Monthly Research Summary</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Annual Publication List</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Student Performance Analysis</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>Stay updated with the latest alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="flex-1">New comment on your recent publication</span>
                      <Button variant="ghost" size="sm">View</Button>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="flex-1">Reminder: Submit progress report</span>
                      <Button variant="ghost" size="sm">Dismiss</Button>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="flex-1">Grant application approved</span>
                      <Button variant="ghost" size="sm">Details</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
