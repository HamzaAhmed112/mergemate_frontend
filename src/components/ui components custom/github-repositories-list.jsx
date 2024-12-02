import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function GitHubRepositories({ repositories }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>GitHub Repositories</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {repositories.map((repoName) => (
                        <li key={repoName} className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">{repoName}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
