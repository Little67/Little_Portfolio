"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Powergrid Corporation of India Limited",
        role: "Powergrid Executive",
        period: "2024 - Present",
        description: "Cleared IOCL, NTPC, NPCIL & PGCIL after GATE 2024. Selected for IIT Kharagpur, IIT Guwahati, and IIT Kanpur.",
    },
    {
        company: "Nuclear Power Corporation of India Limited(NPCIL)-Official",
        role: "Scientific Officer",
        period: "Aug 2024 - Nov 2024",
        description: "Rawatbhata, Rajasthan, India",
    },
    {
        company: "Rourkela Steel Plant",
        role: "Electrical Engineer Intern",
        period: "June 2023 - July 2023",
        description: "Gained hands-on experience in industrial electrical systems and maintenance.",
    },
    {
        company: "Rourkela Steel Plant",
        role: "Electrical Engineer Intern",
        period: "May 2022 - June 2022",
        description: "Learned about power distribution and control systems in a large-scale steel plant.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-border"
                            >
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            <Briefcase size={18} className="text-primary" />
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg text-muted-foreground mb-3">{exp.company}</h4>
                                    <p className="text-muted-foreground/80">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
