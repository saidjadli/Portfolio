import { Experience } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface ExperiencePreviewProps {
    experience: Experience[];
}

export function ExperiencePreview({ experience }: ExperiencePreviewProps) {
    return (
        <section className="py-20" id="experience">
            <div className="container px-4 md:px-6">
                <SectionHeading title="Experience" subtitle="My professional journey." align="left" />

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                    {experience.map((job) => (
                        <div key={job.id} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary box-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                    <div className="text-lg text-primary">{job.company}</div>
                                </div>
                                <div className="text-sm text-gray-400 font-mono">
                                    {job.startDate} — {job.endDate} | {job.location}
                                </div>
                            </div>

                            <Card className="bg-white/5 border-transparent">
                                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {job.tech.map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-xs border-white/10 text-gray-400">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/experience">
                        <Button variant="outline">View Full Resume</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
