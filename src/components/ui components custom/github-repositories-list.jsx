import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const repositories = [
    { name: "awesome-project", description: "A really cool project", language: "JavaScript", stars: 120 },
    { name: "data-viz-tool", description: "Data visualization library", language: "Python", stars: 89 },
    { name: "mobile-app-template", description: "Template for React Native apps", language: "JavaScript", stars: 45 },
]

export function GitHubRepositories() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>GitHub Repositories</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {repositories.map((repo) => (
                        <li key={repo.name} className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">{repo.name}</h3>
                                <p className="text-sm text-muted-foreground">{repo.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline">{repo.language}</Badge>
                                <span className="text-sm">⭐ {repo.stars}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

