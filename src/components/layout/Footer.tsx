import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Krutibas Dwibedi. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/krutibasdwibedi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="mailto:krutibasdwibedi@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
