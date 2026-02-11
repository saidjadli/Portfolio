import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 py-12 mt-20">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center gap-2 text-lg font-bold font-mono tracking-tighter">
                        <Image
                            src="/images/logo.png"
                            alt="Jadli Said Logo"
                            width={28}
                            height={28}
                            className="w-7 h-7 object-contain"
                        />
                        <span>&lt;Jadli<span className="text-primary">Said</span> /&gt;</span>
                    </Link>
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Jadli Said. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/saidjadli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/said-jadli-843135254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:jadli.said00@gmail.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
