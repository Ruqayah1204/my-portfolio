"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

interface SectionRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}


export default function SectionReveal({children, direction="up", delay=0}: SectionRevealProps)  {
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = elementRef.current;
        if(!el) return;

        const fromVars = {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        }

        gsap.fromTo(
            el,
            fromVars,
            {
                opacity: 1,
                x: 0,
                y: 0,
                delay: delay,
                ease: "power3.out",
                // duration: 1.2,
                scrollTrigger:{
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            },
        );
    }, [direction, delay]);

    return <div ref={elementRef}>{children}</div>
}