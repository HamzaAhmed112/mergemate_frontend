import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubRepositories } from "@/components/ui components custom/github-repositories-list"
import Link from "next/link"

const user = {
    username: "JohnDoe",
    avatarUrl: "https://github.com/shadcn.png",
    experienceLevel: "Intermediate",
    expertise: ["Web Development", "Mobile Apps", "Machine Learning"],
    techStack: ["JavaScript", "React", "Node.js", "Python", "TensorFlow"],
}

export function ProfileView() {
    return (
        <div className="container mx-auto p-6 space-y-8">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={user.avatarUrl} alt={user.username} />
                        <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl">{user.username}</CardTitle>
                        <Button asChild className="mt-2">
                            <Link href="/home/profile/edit">Edit Profile</Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Experience Level</h3>
                        <p>{user.experienceLevel}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Expertise</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {user.expertise.map((item) => (
                                <Badge key={item} variant="secondary">{item}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {user.techStack.map((item) => (
                                <Badge key={item} variant="outline">{item}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <GitHubRepositories />
        </div>
    )
}

