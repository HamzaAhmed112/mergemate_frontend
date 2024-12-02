"use client"

// import { MainSidebar } from "@/components/ui components custom/main-sidebar"
// import { ProjectCard } from "@/components/ui components custom/project-card"
// import { SidebarProvider } from "@/components/ui/sidebar"
//
// export default function Page() {
//   return (
//       <SidebarProvider>
//         <div className="flex min-h-screen">
//           <MainSidebar />
//           <main className="flex-1 p-8">
//             <ProjectCard
//                 title="Image recreation with GA"
//                 difficulty="HARD"
//                 tech_stack={["JavaScript", "HTML", "CSS"]}
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, nisl a tempor interdum, sapien magna eleifend ex, at vulputate nisi neque a odio. Fusce suscipit, risus sed lacinia egestas, arcu felis feugiat erat, et fermentum metus nunc at nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam congue, justo nec dapibus facilisis, erat nisl convallis dolor, a bibendum augue urna nec nisi. Vivamus et velit ac nisl scelerisque ultrices in ac ligula. Integer at lacus non arcu auctor rhoncus. Duis tincidunt vel orci vel posuere."
//                 status="error"
//             />
//           </main>
//         </div>
//       </SidebarProvider>
//   )
// }


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/login");
    };

    return (
        <div className="flex flex-col min-h-screen w-screen">
            {/* Header */}
            <header className="border-b">
                <div className="min-w-[98%] container flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/image.png"
                            alt="MergeMate Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-xl font-bold">MergeMate</span>
                    </Link>
                    <Button variant="default" onClick={handleLoginClick}>
                        LOGIN HERE →
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                                    Empowering Open Source Contributions
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl">
                                    Join our platform to discover, contribute, and collaborate on open source projects.
                                    Make your mark in the developer community.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" className="w-full sm:w-auto" onClick={handleLoginClick}>Get Started</Button>
                            </div>
                        </div>
                        <Image
                            src="/1.JPG"
                            alt="Developer Illustration"
                            width={600}
                            height={400}
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>

            {/*/!* Trusted By Section *!/*/}
            {/*<section className="w-full py-12 md:py-24 lg:py-32">*/}
            {/*    <div className="container px-4 md:px-6">*/}
            {/*        <h2 className="text-center text-2xl font-bold mb-8 md:text-3xl md:mb-12">Trusted By Developer Communities</h2>*/}
            {/*        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center">*/}
            {/*            {[1, 2, 3, 4].map((i) => (*/}
            {/*                <div key={i} className="flex items-center justify-center">*/}
            {/*                    <div className="h-12 w-full max-w-[160px] bg-gray-200 rounded-lg" />*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Features Section */}
            <section className="flex flex-row justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="w-full container px-4 md:px-6">
                    <div className="grid gap-8 md:gap-12 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <svg
                                    className="h-6 w-6 text-primary"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Open Source Communities</h3>
                            <p className="text-gray-500">Connect with passionate developers and contribute to meaningful
                                projects</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <svg
                                    className="h-6 w-6 text-primary"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path
                                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Project Management</h3>
                            <p className="text-gray-500">Efficiently manage contributions and track project progress</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <svg
                                    className="h-6 w-6 text-primary"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M12 2v20"/>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Contribution Tracking</h3>
                            <p className="text-gray-500">Monitor your impact and growth in the open source ecosystem</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Sections */}
            <section className="flex flex-row justify-center w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Start Your
                                    Open Source Journey</h2>
                                <p className="text-gray-500 md:text-xl">
                                    Begin your contribution journey with our guided onboarding process. Connect with
                                    mentors and find projects that match your skills.
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/2.JPG"
                            alt="Collaboration Illustration"
                            width={400}
                            height={400}
                            className="mx-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <Image
                            src="/3.JPG"
                            alt="Security Illustration"
                            width={400}
                            height={400}
                            className="mx-auto object-contain order-2 lg:order-1"
                        />
                        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Secure &
                                    Seamless Experience</h2>
                                <p className="text-gray-500 md:text-xl">
                                    Our platform ensures secure authentication and smooth project management. Focus on
                                    coding while we handle the rest.
                                </p>
                            </div>
                            <Button className="w-full sm:w-auto" onClick={handleLoginClick}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-gray-100">
                <div className="border-t p-8 text-center text-gray-500">
                    <p>© 2024 MergeMate. All rights reserved.</p>
                    <p>By StrawHat Coders/Devs.</p>
                </div>
            </footer>
            {/*<footer className="border-t bg-gray-100">*/}
            {/*    <div className="container flex flex-col gap-8 px-4 py-10 md:px-6">*/}
            {/*        /!*<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">*!/*/}
            {/*        /!*    <div className="space-y-4">*!/*/}
            {/*        /!*        <h4 className="text-lg font-semibold">Company</h4>*!/*/}
            {/*        /!*        <ul className="space-y-2">*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">About</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Careers</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Blog</Link></li>*!/*/}
            {/*        /!*        </ul>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*    <div className="space-y-4">*!/*/}
            {/*        /!*        <h4 className="text-lg font-semibold">Support</h4>*!/*/}
            {/*        /!*        <ul className="space-y-2">*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Documentation</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Help Center</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Contact</Link></li>*!/*/}
            {/*        /!*        </ul>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*    <div className="space-y-4">*!/*/}
            {/*        /!*        <h4 className="text-lg font-semibold">Legal</h4>*!/*/}
            {/*        /!*        <ul className="space-y-2">*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Cookie Policy</Link></li>*!/*/}
            {/*        /!*        </ul>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*    <div className="space-y-4">*!/*/}
            {/*        /!*        <h4 className="text-lg font-semibold">Connect</h4>*!/*/}
            {/*        /!*        <ul className="space-y-2">*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Twitter</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">GitHub</Link></li>*!/*/}
            {/*        /!*            <li><Link href="#" className="text-gray-500 hover:text-gray-900">Discord</Link></li>*!/*/}
            {/*        /!*        </ul>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        <div className="border-t pt-8 text-center text-gray-500">*/}
            {/*            <p>© 2024 MergeMate. All rights reserved.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    )
}

