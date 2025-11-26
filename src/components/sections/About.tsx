"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                                <Image
                                    src="/_krutibas.jpg"
                                    alt="Krutibas Dwibedi"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="prose prose-invert text-muted-foreground text-lg leading-relaxed space-y-6">
                            <p>
                                Hi, I&apos;m <span className="text-primary font-medium">Krutibas Dwibedi</span>, a passionate and dedicated Electrical Engineering student from Indira Gandhi Institute of Technology (IGIT), Sarang
                            </p>
                            <p>
                                My academic performance and technical skills have been recognized through some of the most competitive evaluations in India. Following my success in GATE 2024, I was selected for prestigious Public Sector Undertakings (PSUs) including IOCL, NPCIL, PGCIL, and NTPC. Furthermore, my profile received attention from top-tier research institutions, earning me calls from IIT Kharagpur, IIT Guwahati, and IIT Kanpur.
                            </p>
                            <p>
                                I thrive on moving from concept to execution, focusing on reliable and efficient electrical systems. This website serves as a showcase for my projects, my evolving expertise, and my dedication to engineering solutions that power the future.
                            </p>
                            {/* <p>
                                My journey in electrical engineering has equipped me with a diverse skill set, including proficiency in various programming languages, experience with hardware and software development, and a solid understanding of electrical systems and circuits. I am particularly interested in the fields of renewable energy, power systems, and smart grid technologies.
                            </p>
                            <p>
                                I am a proactive learner and a collaborative team player, always eager to take on new challenges and contribute to meaningful projects.
                            </p> */}
                        </div>
                    </div>

                    <div className="mt-16 mb-12">
                        <h3 className="text-xl font-semibold mb-6 text-center">Featured Video</h3>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-lg max-w-4xl mx-auto">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/N0HyM1yTuZI"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-xl font-semibold mb-6 text-center">Key Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Electrical Engineering",
                                "Smart Grids",
                                "Renewable Energy",
                                "Web Development",
                                "Hardware Design",
                                "Problem Solving"
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
