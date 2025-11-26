"use client";

import { motion } from "framer-motion";
import { Zap, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Vehicle to Grid Technology",
        description: "A technology that enables energy to be pushed back to the power grid from the battery of an electric vehicle (EV). Explored the potential of V2G for grid stability and peak shaving.",
        tags: ["Renewable Energy", "Smart Grid", "EV"],
        icon: Zap,
        link: "#",
        github: "#",
    },
    // Placeholder for more projects
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <project.icon size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link
                                            href={project.link}
                                            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={16} /> Demo
                                        </Link>
                                        <Link
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <Github size={16} /> Code
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
