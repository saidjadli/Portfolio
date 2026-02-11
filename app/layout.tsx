import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { FloatingLanguageSwitcher } from "@/components/i18n/FloatingLanguageSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Jadli Said | Data Scientist & ML Engineer",
    description: "Portfolio of Jadli Said - Data Scientist & Machine Learning Engineer based in Tetouan, Morocco.",
    icons: {
        icon: "/images/logo.png",
        apple: "/images/logo.png",
    },
    openGraph: {
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Jadli Said Portfolio",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(inter.variable, "font-sans antialiased bg-[#0B0F0E] text-[#F3F4F6] flex flex-col min-h-screen")}>
                <LanguageProvider>
                    <Navbar />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <Footer />
                    <FloatingLanguageSwitcher />
                </LanguageProvider>
            </body>
        </html>
    );
}
