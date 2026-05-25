import { Language } from "@/lib/i18n";

export const RESUME_URLS: Record<Language, string> = {
    en: "/resume/said_jadli_CV.pdf",
    fr: "/resume/said_jadli_CV_fr.pdf",
};

export function getResumeUrl(language: Language) {
    return RESUME_URLS[language];
}
