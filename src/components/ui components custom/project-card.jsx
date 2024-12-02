

import { Badge } from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";





export function ProjectCard({ _id, title, difficulty, tech_stack, description }) {

    return (
        <Card className="max-w-2xl my-1">
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
                            {tech_stack.map((tech) => (
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
                    <button className="bg-custom-gray text-white px-2 py-1 rounded mr-2">Manage Contributions</button>
                </Link>
                <Link href="/home/my-projects/manage-requests">
                    <button className="bg-custom-gray text-white px-2 py-1 rounded mx-2">Manage Requests</button>
                </Link>
                <Link href={`/home/my-projects/manage-tasks/${_id}`}>
                    <button className="bg-custom-gray text-white px-2 py-1 rounded mx-2">Manage Tasks</button>
                </Link>
            </CardFooter>
        </Card>
    );
}
