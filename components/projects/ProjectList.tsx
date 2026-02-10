"use client";

import { useState, useMemo } from "react";
import { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Github, ExternalLink, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectListProps {
    initialProjects: Project[];
}

export function ProjectList({ initialProjects }: ProjectListProps) {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const categories = ["All", ...Array.from(new Set(initialProjects.map((p) => p.category)))];

    const filteredProjects = useMemo(() => {
        return initialProjects.filter((project) => {
            const matchesCategory = filter === "All" || project.category === filter;
            const matchesSearch =
                project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.summary.toLowerCase().includes(search.toLowerCase()) ||
                project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [initialProjects, filter, search]);

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                    ? "bg-primary text-background"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="block h-full group">
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
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No projects found. Try adjusting your search or filters.
                </div>
            )}
        </div>
    );
}
