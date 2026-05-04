"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";

export default function ResumePage() {
    return (
        <SectionContainer maxWidth="5xl" className="py-20 min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <Link href="/" className="self-start">
                    <Button variant="ghost" className="pl-0 gap-2 hover:bg-transparent hover:text-primary">
                        <ArrowLeft size={16} /> Back to Home
                    </Button>
                </Link>
                <a href="/resume/said_jadli_CV.pdf" download target="_blank">
                    <Button size="lg" className="gap-2">
                        <Download size={16} /> Download PDF
                    </Button>
                </a>
            </div>

            <SectionHeading title="Resume" subtitle="My professional journey and qualifications." />

            <div className="flex-grow bg-white/5 rounded-2xl overflow-hidden border border-white/10 h-[800px] md:h-[1000px]">
                <iframe
                    src="/resume/said_jadli_CV.pdf"
                    className="w-full h-full"
                    title="Jadli Said Resume"
                >
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                        <p className="text-gray-400 mb-4">
                            Your browser doesn't support embedding PDFs.
                        </p>
                        <a href="/resume/said_jadli_CV.pdf" download target="_blank">
                            <Button>Download Resume</Button>
                        </a>
                    </div>
                </iframe>
            </div>
        </SectionContainer>
    );
}
