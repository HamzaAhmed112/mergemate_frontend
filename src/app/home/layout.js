
import { MainSidebar } from "@/components/ui components custom/main-sidebar";
import {SidebarProvider} from "@/components/ui/sidebar";

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen">
                <div className="w-64 min-h-screen bg-gray-100">
                    <MainSidebar/>
                </div>

                <div className="flex-1 p-6">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
}
