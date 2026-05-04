"use client";

import Link from "next/link";
import Image from "next/image";
import { Certificate } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";

interface FeaturedCertificatesProps {
    certificates: Certificate[];
}

export function FeaturedCertificates({ certificates }: FeaturedCertificatesProps) {
    const { t } = useTranslation();

    return (
        <section className="py-20" id="certificates">
            <SectionContainer>
                <div className="flex justify-between items-end mb-10">
                    <SectionHeading
                        title={t("certificates.featuredTitle")}
                        subtitle={t("certificates.featuredSubtitle")}
                    />
                    <Link href="/certificates" className="hidden md:inline-block">
                        <span className="text-primary hover:underline flex items-center gap-1">
                            {t("certificates.viewAll")} <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/certificates#${certificate.id}`}
                                className="block h-full group"
                                scroll={true}
                            >
                                <Card hoverEffect className="h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                                            {certificate.category}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {certificate.title}
                                    </h3>

                                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={certificate.image}
                                            alt={certificate.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="mt-auto">
                                        <Button variant="outline" className="w-full group-hover:bg-primary/10">
                                            {t("certificates.viewDetails")}
                                        </Button>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/certificates">
                        <Button variant="outline">{t("certificates.viewAll")}</Button>
                    </Link>
                </div>
            </SectionContainer>
        </section>
    );
}
