import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubRepositories } from "@/components/ui components custom/github-repositories-list";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import {useRouter} from "next/navigation";

export function ProfileView({ token }) {
    const router = useRouter()
    const [userProfile, setUserProfile] = useState(undefined);

    async function getUserProfile(token) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUserProfile(await res.json());
    }

    useEffect(() => {
        getUserProfile(token).then(() => console.log("User profile fetched"));
    }, [token]);

    if (!userProfile) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto p-6 space-y-8">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage
                            src={userProfile.profile_image}
                            alt={userProfile.username}
                        />
                        <AvatarFallback>
                            {userProfile.username.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl">{userProfile.username}</CardTitle>
                        <Button
                            className="hover:cursor-pointer"
                            asChild
                            onClick={() =>
                                router.push(
                                    `/home/profile/edit?expertise=${encodeURIComponent(userProfile.expertise)}&techStack=${encodeURIComponent(userProfile.tech_stack)}`
                                )
                            }
                        >
                            <span>Edit Profile</span>
                        </Button>
                        {/*<Button asChild className="mt-2">*/}
                        {/*    <Link href="/home/profile/edit">Edit Profile</Link>*/}
                        {/*</Button>*/}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Experience Level</h3>
                        <p>{userProfile.experience_level}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Expertise</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {userProfile.expertise.length > 0 ? (
                                userProfile.expertise.map((item) => (
                                    <Badge key={item._id} variant="secondary">
                                        {item.title}
                                    </Badge>
                                ))
                            ) : (
                                <p>No expertise listed</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {userProfile.tech_stack.length > 0 ? (
                                userProfile.tech_stack.map((item) => (
                                    <Badge key={item._id} variant="outline">
                                        {item.title}
                                    </Badge>
                                ))
                            ) : (
                                <p>No tech stack listed</p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <GitHubRepositories repositories={userProfile.repositories} />
        </div>
    );
}
