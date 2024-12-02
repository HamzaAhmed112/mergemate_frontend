"use client"

import { Home, Compass, GitFork, Folder, User, LogOut } from 'lucide-react' // Import LogOut icon
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"

const navigation = [
    { name: "Explore", href: "/home/explore", icon: Compass },
    { name: "My Contributions", href: "/home/my-contributions", icon: GitFork },
    { name: "My Projects", href: "/home/my-projects", icon: Folder },
    { name: "Profile", href: "/home/profile", icon: User },
]

export function MainSidebar() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    }

    return (
        <Sidebar className="border-r">
            <SidebarHeader className="border-b p-4">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="/image.png" />
                        <AvatarFallback>MM</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">MergeMate</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navigation.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild>
                                <a href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <button onClick={handleLogout} className="flex items-center gap-2">
                                <LogOut className="h-4 w-4" />
                                <span>Logout</span>
                            </button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
