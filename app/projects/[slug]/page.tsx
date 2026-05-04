import { getProjectBySlug, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ProjectGallery, ProjectHeroImage } from "@/components/projects/ProjectDetailImages";

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);
    if (!project) return {};
    return {
        title: `${project.title} | Projects`,
        description: project.summary,
    };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    const heroImage = project.image ?? project.coverImage;
    const gallery = project.gallery ?? [];

    return (
        <article className="container px-4 md:px-6 py-20 max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-mono text-sm border border-primary/20 px-3 py-1 rounded bg-primary/5">
                        {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{project.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <Github className="mr-2 h-4 w-4" /> View Code
                            </Button>
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Button>
                        </a>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-12">
                    {project.tags.map(tag => (
                        <Badge key={tag} className="text-sm py-1 px-3 bg-secondary/50 border-white/10 text-gray-300">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <ProjectHeroImage title={project.title} heroImage={heroImage} />
            </div>

            {project.details && (
                <div className="grid gap-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">The Problem</h2>
                        <Card className="bg-transparent border-white/5">
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.details.problem}</p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">Approach & Pipeline</h2>
                        <Card className="bg-transparent border-white/5">
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.details.approach}</p>
                        </Card>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Dataset</h2>
                            <Card className="bg-transparent border-white/5 h-full">
                                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.details.dataset}</p>
                            </Card>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
                            <Card className="bg-transparent border-primary/20 bg-primary/5 h-full">
                                <p className="text-gray-200 leading-relaxed whitespace-pre-line">{project.details.results}</p>
                            </Card>
                        </section>
                    </div>

                    <ProjectGallery title={project.title} gallery={gallery} />

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">Limitations</h2>
                        <p className="text-gray-400 italic whitespace-pre-line">{project.details.limitations}</p>
                    </section>
                </div>
            )}
        </article>
    );
}
