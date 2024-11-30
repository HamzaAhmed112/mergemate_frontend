"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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

export function EditProfileForm() {
    const router = useRouter()
    const [formData, setFormData] = useState(user)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleExperienceLevelChange = (value) => {
        setFormData((prev) => ({ ...prev, experienceLevel: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Updated profile:", formData)
        // Here you would typically send the data to your backend
        router.push("/profile")
    }

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
                        <Button type="submit" onClick={() => router.push("/home/profile")}>Save Changes</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

