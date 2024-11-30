import { MainSidebar } from "@/components/ui components custom/main-sidebar"
import { ProjectCard } from "@/components/ui components custom/project-card"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
      <SidebarProvider>
        <div className="flex min-h-screen">
          <MainSidebar />
          <main className="flex-1 p-8">
            <ProjectCard
                title="Image recreation with GA"
                difficulty="HARD"
                techStack={["JavaScript", "HTML", "CSS"]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam congue, justo nec dapibus facilisis, erat nisl convallis dolor, a bibendum augue urna nec nisi. Vivamus et velit ac nisl scelerisque ultrices in ac ligula. Integer at lacus non arcu auctor rhoncus. Duis tincidunt vel orci vel posuere."
                status="error"
            />
          </main>
        </div>
      </SidebarProvider>
  )
}

