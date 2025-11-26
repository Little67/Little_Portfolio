"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="text-primary" />
                            <span>krutibasdwibedi@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="text-primary" />
                            <span>Rourkela, India</span>
                        </div>
                    </div>

                    <a
                        href="mailto:krutibasdwibedi@gmail.com"
                        className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
