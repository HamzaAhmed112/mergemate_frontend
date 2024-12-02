"use client"

import { useEffect, useState } from "react"

import {useParams, useRouter} from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const user = {
    experienceLevel: "Intermediate",
    expertise: "Web Development, Mobile Apps, Machine Learning",
    techStack: "JavaScript, React, Node.js, Python, TensorFlow",
}

const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"]

export function EditProfileForm({token}) {
    const router = useRouter();
    //console.log(useParams())
    const { expertise, techStack } = useParams()
    const [formData, setFormData] = useState({
        expertise: expertise || "",
        techStack: techStack || "",
        experienceLevel: "Intermediate",
    });

    useEffect(() => {
        if (expertise || techStack) {
            setFormData((prev) => ({
                ...prev,
                expertise: expertise || "",
                techStack: techStack || "",
            }));
        }
    }, [expertise, techStack]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleExperienceLevelChange = (value) => {
        setFormData((prev) => ({ ...prev, experienceLevel: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/edit-profile`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    experienceLevel: formData.experienceLevel,
                    expertise: formData.expertise,
                    techStack: formData.techStack,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('res')
                alert(data.message);
                router.push('/user/profile');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert('Error updating profile');
        }
    };


    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="experienceLevel">Experience Level</Label>
                            <Select
                                value={formData.experienceLevel}
                                onValueChange={handleExperienceLevelChange}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                                <SelectContent>
                                    {experienceLevels.map((level) => (
                                        <SelectItem key={level} value={level}>
                                            {level}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="expertise">Expertise</Label>
                            <Textarea
                                id="expertise"
                                name="expertise"
                                value={formData.expertise}
                                onChange={handleChange}
                                placeholder="Enter your areas of expertise (comma-separated)"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="techStack">Tech Stack</Label>
                            <Textarea
                                id="techStack"
                                name="techStack"
                                value={formData.techStack}
                                onChange={handleChange}
                                placeholder="Enter your tech stack (comma-separated)"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => router.push("/home/profile")}>Cancel</Button>
                        <Button type="submit">Save Changes</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

