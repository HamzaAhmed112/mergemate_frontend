

import { Badge } from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";





export function ProjectCard({ title, difficulty, techStack, description, status }) {

    return (
        <Card className="max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Difficulty:</span>
                        <Badge variant="secondary">{difficulty}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Tech Stack:</span>
                        <div className="flex gap-2">
                            {techStack.map((tech) => (
                                <Badge key={tech} variant="outline">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <span className="font-semibold">Description:</span>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Link href="/home/my-projects/manage-contributions">
                    <button className="bg-green-600 text-white px-2 py-1 rounded mr-2">Manage Contributions</button>
                </Link>
                <button className="bg-green-600 text-white px-2 py-1 rounded mx-2">Manage Requests</button>
                <button className="bg-green-600 text-white px-2 py-1 rounded mx-2">Manage Tasks</button>
            </CardFooter>
        </Card>
    );
}