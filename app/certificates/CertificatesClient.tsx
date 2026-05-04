"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Certificate } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionContainer } from "@/components/layout/SectionContainer";

interface CertificatesClientProps {
    certificates: Certificate[];
}

export function CertificatesClient({ certificates }: CertificatesClientProps) {
    const [filter, setFilter] = useState<string>("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { t, language } = useTranslation();

    const categories = [
        "All",
        "Deep Learning",
        "Machine Learning",
        "Tools",
        "Languages",
        "Spoken Languages"
    ];

    const filteredCertificates = useMemo(() => {
        return certificates.filter((certificate) => {
            const matchesCategory = filter === "All" || certificate.category === filter;
            return matchesCategory;
        });
    }, [certificates, filter]);

    const getCategoryTranslation = (category: string) => {
        const translationMap: Record<string, string> = {
            "All": t("certificates.filterAll"),
            "Deep Learning": t("certificates.filterDeepLearning"),
            "Machine Learning": t("certificates.filterMachineLearning"),
            "Tools": t("certificates.filterTools"),
            "Languages": t("certificates.filterLanguages"),
            "Spoken Languages": t("certificates.filterSpokenLanguages")
        };
        return translationMap[category] || category;
    };

    return (
        <SectionContainer className="py-20">
            <SectionHeading
                title={t("certificates.title")}
                subtitle={t("certificates.subtitle")}
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                            ? "bg-primary text-background"
                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                    >
                        {getCategoryTranslation(category)}
                    </button>
                ))}
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AnimatePresence>
                    {filteredCertificates.map((certificate) => (
                        <motion.div
                            key={certificate.id}
                            id={certificate.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="scroll-mt-28"
                        >
                            <Card hoverEffect className="h-full flex flex-col">
                                {/* Category Badge */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                                        {certificate.category}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4">
                                    {certificate.title}
                                </h3>

                                {/* What I Learned Section */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-primary mb-3">
                                        {t("certificates.whatILearned")}
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {certificate.learned[language as 'en' | 'fr'].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-primary mt-1.5">•</span>
                                                <span className="flex-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Certificate Image */}
                                <div
                                    className="relative w-full h-64 rounded-lg overflow-hidden mt-auto cursor-pointer group"
                                    onClick={() => setSelectedImage(certificate.image)}
                                >
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Zoom Icon Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredCertificates.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No certificates found.
                </div>
            )}

            <ImageLightbox
                src={selectedImage}
                alt="Certificate"
                onClose={() => setSelectedImage(null)}
            />
        </SectionContainer>
    );
}
