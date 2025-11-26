"use client";

import { useState, useEffect } from "react";

interface TextTypeProps {
    text: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export default function TextType({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
    className = "",
}: TextTypeProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            const i = loopNum % text.length;
            const fullText = text[i];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        timer = setTimeout(handleTyping, typingSpeedState);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, text, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
