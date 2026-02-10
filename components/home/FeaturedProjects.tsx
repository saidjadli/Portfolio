import Link from "next/link";
import { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FeaturedProjectsProps {
    projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <section className="py-20" id="projects">
            <div className="container px-4 md:px-6">
                <div className="flex justify-between items-end mb-10">
                    <SectionHeading title="Featured Projects" subtitle="Selected works demonstrating technical depth and impact." />
                    <Link href="/projects" className="hidden md:inline-block">
                        <span className="text-primary hover:underline flex items-center gap-1">
                            View all projects <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`} className="block h-full group">
                            <Card hoverEffect className="h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                                        {project.category}
                                    </div>
                                    <div className="flex gap-2 text-gray-400">
                                        {project.githubUrl && <Github size={16} />}
                                        {project.demoUrl && <ExternalLink size={16} />}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {project.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{project.tags.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/projects">
                        <Button variant="outline">View All Projects</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
