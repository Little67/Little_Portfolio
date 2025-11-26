"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TextType from "@/components/ui/TextType";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-6 min-h-[32px]">
                        <TextType
                            text={[
                                "Powergrid Executive",
                                "AIR-653 GATE 2024",
                                "Cleared IOCL, NTPC, NPCIL & PGCIL",
                                "Dropout IIT Kharagpur"
                            ]}
                            typingSpeed={50}
                            deletingSpeed={30}
                            pauseDuration={2000}
                        />
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600 dark:from-gray-900 dark:to-gray-400">
                        Building the Future of
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="text-primary">Energy & Technology</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Passionate about renewable energy, smart grids, and software development.
                    Bridging the gap between hardware and software to solve real-world problems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                        View Projects <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
