import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { Shield, Lock, Eye, FileText, Scale } from "lucide-react";

const PrivacySection = ({ icon, title, content, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="mb-12"
    >
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-primary/5 text-primary border border-primary/10">
                {icon}
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="pl-14">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {content}
            </p>
        </div>
    </motion.div>
);

const PrivacyPolicy = () => {
    const lastUpdated = "January 2026";

    const sections = [
        {
            icon: <Lock size={24} />,
            title: "Our Commitment to Privacy",
            content: `At HealthLedger SynexAI, we believe that your health data is your most private asset. Our entire platform is built on the principle of "Privacy by Design." We use advanced cryptographic techniques and Zero-Knowledge Federated Learning to ensure that your sensitive medical information never leaves your secure node in an unencrypted state.`
        },
        {
            icon: <Eye size={24} />,
            title: "Data Sovereignty",
            content: `Unlike traditional healthcare systems, HealthLedger SynexAI empowers patients with full data sovereignty. You control exactly who can access your records, for how long, and for what purpose. Every access request and authorization is recorded on an immutable blockchain ledger, providing you with a complete, tamper-proof audit trail of your data's lifecycle.`
        },
        {
            icon: <Shield size={24} />,
            title: "Federated Learning & Security",
            content: `We utilize Federated Learning to train medical AI models. This means the AI "comes to the data" rather than the data being sent to a central server. Only encrypted model updates—mathematical representations that contain no identifiable patient information—are shared across the network to improve global intelligence for healthcare breakthroughs.`
        },
        {
            icon: <FileText size={24} />,
            title: "The Information We Collect",
            content: `We collect minimal administrative data required for account functionality (such as wallet addresses and verified professional credentials for doctors). We do not store, view, or have access to the raw medical content of your records. All medical documents are encrypted at the source before being distributed across our secure architecture.`
        },
        {
            icon: <Scale size={24} />,
            title: "Regulatory Compliance",
            content: `HealthLedger SynexAI is designed to meet and exceed global healthcare standards, including HIPAA and GDPR. By eliminating the central storage of raw medical records, we significantly reduce the risk of large-scale data breaches that traditional centralized databases face.`
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <NavBar />
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-foreground border border-foreground/10 text-sm font-medium mb-6 backdrop-blur-md">
                        <Shield size={16} className="text-primary" />
                        <span>Secure & Compliant Architecture</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground pb-2 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.header>

                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <PrivacySection key={index} {...section} index={index} />
                    ))}
                </div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 pt-8 border-t border-foreground/5 text-center"
                >
                    <p className="text-muted-foreground italic">
                        Questions regarding our privacy practices? Contact our security team at support@healthledgersynexai.com
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
