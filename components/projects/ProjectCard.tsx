"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
    project: Project;
    tagLimit?: number;
}

function ProjectPreviewImage({ project }: { project: Project }) {
    const [hasError, setHasError] = useState(false);
    const image = project.image ?? project.coverImage;

    if (!image || hasError) {
        return null;
    }

    return (
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-white/5">
            <Image
                src={image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setHasError(true)}
            />
        </div>
    );
}

export function ProjectCard({ project, tagLimit = 4 }: ProjectCardProps) {
    const hasImage = Boolean(project.image ?? project.coverImage);

    return (
        <Link href={`/projects/${project.slug}`} className="block h-full group">
            <Card hoverEffect className={`h-full flex flex-col ${hasImage ? "p-0" : ""}`}>
                <ProjectPreviewImage project={project} />

                <div className={hasImage ? "flex flex-1 flex-col p-6" : "flex flex-1 flex-col"}>
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
                        {project.tags.slice(0, tagLimit).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > tagLimit && (
                            <Badge variant="outline" className="text-xs">
                                +{project.tags.length - tagLimit}
                            </Badge>
                        )}
                    </div>
                </div>
            </Card>
        </Link>
    );
}
