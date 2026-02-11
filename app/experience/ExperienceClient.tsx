"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { Experience, Education } from "@/lib/types";

interface ExperienceClientProps {
    experience: Experience[];
    education: Education[];
}

export function ExperienceClient({ experience, education }: ExperienceClientProps) {
    const { t } = useTranslation();

    return (
        <div className="container px-4 md:px-6 py-20">
            <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                        {experience.map((job) => (
                            <div key={job.id} className="relative pl-8 md:pl-12">
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

                                <Card className="bg-white/5 border-transparent mb-6">
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
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <h2 className="text-2xl font-bold mb-8 flex items-center">
                            <span className="w-8 h-1 bg-primary mr-4"></span>
                            Education
                        </h2>

                        <div className="space-y-8">
                            {education.map((edu, idx) => (
                                <Card key={idx} className="bg-transparent border-white/10">
                                    <div className="text-primary font-mono text-sm mb-2">{edu.startDate} - {edu.endDate}</div>
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.school}</h3>
                                    <div className="text-gray-400 mb-4">{edu.degree}</div>
                                    <p className="text-sm text-gray-400">{edu.description}</p>
                                    <div className="mt-4 text-xs text-gray-500">{edu.location}</div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
