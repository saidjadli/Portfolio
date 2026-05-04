import Link from "next/link";
import { Project } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";

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
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} tagLimit={3} />
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
