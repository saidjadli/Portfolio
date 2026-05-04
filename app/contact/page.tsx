"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageProvider";
import { SectionContainer } from "@/components/layout/SectionContainer";

type Status = "idle" | "loading" | "success" | "error";

    export default function ContactPage() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const { t } = useTranslation();

    const validateForm = (data: { name: string; email: string; message: string }) => {
        const errors: Record<string, string> = {};

        if (!data.name.trim()) errors.name = t("contact.validationNameRequired") || "Name is required";

        if (!data.email.trim()) {
        errors.email = t("contact.validationEmailRequired") || "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = t("contact.validationEmailInvalid") || "Invalid email format";
        }

        if (!data.message.trim()) errors.message = t("contact.validationMessageRequired") || "Message is required";

        return errors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        setFieldErrors({});

        const formEl = e.currentTarget;
        const formData = new FormData(formEl);

        const data = {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        message: (formData.get("message") as string) || "",
        website: (formData.get("website") as string) || "", // honeypot
        };

        // Client-side validation
        const errors = validateForm(data);
        if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setStatus("idle");
        return;
        }

        // Rate limit (3s)
        const now = Date.now();
        if (now - lastSubmitTime < 3000) {
        setErrorMessage("Please wait a moment before submitting again.");
        setStatus("error");
        return;
        }

        setStatus("loading");

        try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        // Try parse JSON (optional)
        let result: any = null;
        try {
            result = await response.json();
        } catch {
            // ignore
        }

        if (response.ok) {
            setLastSubmitTime(now);
            setErrorMessage("");
            setStatus("success");
            formEl.reset();
            return;
        }

        const message = result?.error || "An unexpected error occurred. Please try again later.";
        setErrorMessage(message);
        setStatus("error");
        } catch (err) {
        console.error("Contact form submission error:", err);
        setErrorMessage("An unexpected error occurred. Please try again later.");
        setStatus("error");
        }
    };

    const handleRetry = () => {
        setStatus("idle");
        setErrorMessage("");
        setFieldErrors({});
    };

    return (
        <SectionContainer maxWidth="4xl" className="py-20">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
            <h3 className="text-2xl font-bold mb-6">{t("contact.heading")}</h3>
            <p className="text-gray-400 mb-8 text-lg">{t("contact.description")}</p>

            <div className="flex items-center gap-4 text-gray-300 mb-10 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                <Mail className="group-hover:text-primary transition-colors" />
                </div>
                <a
                href="mailto:jadli.said00@gmail.com"
                className="text-lg hover:text-primary transition-colors"
                >
                jadli.said00@gmail.com
                </a>
            </div>

            <Card className="bg-primary/5 border-primary/20 p-6">
                <h4 className="font-bold text-primary mb-2">{t("contact.noteTitle")}</h4>
                <p className="text-sm text-gray-400">{t("contact.noteBody")}</p>
            </Card>
            </div>

            {/* RIGHT */}
            <Card className="p-8 bg-white/5 border-white/10">
            {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                    {t("contact.successTitle") || "Message Sent!"}
                </h3>

                <p className="text-gray-400 mb-8 max-w-md">
                    {t("contact.successBody") || "Thanks for reaching out. I'll get back to you soon."}
                </p>

                <Button onClick={handleRetry} className="min-w-[200px]">
                    {t("contact.successAnother") || "Send another message"}
                </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                )}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    {t("contact.formName")}
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full bg-black/20 border ${
                        fieldErrors.name ? "border-red-500" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                    placeholder={t("contact.formPlaceholderName")}
                    />
                    {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {t("contact.formEmail")}
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full bg-black/20 border ${
                        fieldErrors.email ? "border-red-500" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                    placeholder={t("contact.formPlaceholderEmail")}
                    />
                    {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    {t("contact.formMessage")}
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`w-full bg-black/20 border ${
                        fieldErrors.message ? "border-red-500" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none`}
                    placeholder={t("contact.formPlaceholderMessage")}
                    />
                    {fieldErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                    )}
                </div>

                {/* Honeypot */}
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    opacity: 0,
                    }}
                />

                <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.formSending") || "Sending..."}
                    </>
                    ) : (
                    t("contact.formSend") || "Send Message"
                    )}
                    </Button>
                </form>
                )}
            </Card>
            </div>
        </SectionContainer>
    );
}
