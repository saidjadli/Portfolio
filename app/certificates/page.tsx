import { getCertificates } from "@/lib/data";
import { CertificatesClient } from "./CertificatesClient";

export const metadata = {
    title: "Certificates | Jadli Said",
    description: "Professional certificates in Deep Learning, Machine Learning, Docker and Data Science earned by Jadli Said.",
};

export default async function CertificatesPage() {
    const certificates = await getCertificates();

    return <CertificatesClient certificates={certificates} />;
}
