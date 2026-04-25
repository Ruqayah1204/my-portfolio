"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"

const words = ["Loading", "Building", "Crafting", "Almost"];

export const Loader = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [zoom, setZoom] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);


    // cycle through words
    useEffect(() => {
        const t = setInterval(() => {
            setWordIndex(i => (i + 1) % words.length)
        }, 800)
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        if(count >= 100){
            setTimeout(() => setZoom(true), 300); // trigger zoo
            setTimeout(() => setHidden(true), 1400); // remove loader from DOM after animation
            return;
        }
        const delay = count < 30 ? 45 : count < 70 ? 20 : count < 90 ? 60 : 25;
        const timer = setTimeout(() => setCount(count => count + 1), delay);
        return () => clearTimeout(timer);
    }, [count]);

    // if (hidden) return null;

    return (
        <>
            {!hidden && (
                <div className={cn(
                    "fixed inset-0 z-9999 flex flex-col justify-between bg-[#080c14] p-8 md:p-12 origin-center",
                    "transition-[transform, opacity] duration-1000 ease-[cubic-bezier(.77,0,.18,1)]",
                    zoom ? "scale-[7] opacity-0 pointer-events-none" : "scale-100 opacity-100" 
                    )}
                >
                    {/* subtle grid lines */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/3 left-0 right-0 h-px bg-[#0f1829]" />
                        <div className="absolute top-2/3 left-0 right-0 h-px bg-[#0f1829]" />
                    </div>
                    {/* top row */}
                    <div className="flex justify-between items-start relative z-10">
                        <span className="text-[10px] tracking-[3px] text-[#334155]">
                            PORTFOLIO — 2026
                        </span>
                        <span className="text-[10px] tracking-[2px] text-[#334155]">
                            001 / 001
                        </span>
                    </div>
                    {/* middle row */}
                    <div className="relative z-10 flex items-center justify-between">
                        <span className="font-space-grotesk text-4xl md:text-7xl lg:text-8xl font-medium uppercase text-[#f1f5f9] tracking-tight transition-all duration-500">
                            {count >= 100 ? "Welcome" : words[wordIndex]}
                        </span>
                        <span
                            className="font-space-grotesk text-5xl md:text-8xl lg:text-9xl font-normal text-transparent"
                            style={{ WebkitTextStroke: "1.5px #8b5cf6" }}
                        >
                            {count}%
                        </span>
                    </div>

                    {/* bottom row */}
                    <div className="flex flex-col gap-3 relative z-10">
                        <div className="w-full h-px bg-[#1e2a3a] overflow-hidden">
                            <div
                                className="h-full  transition-all duration-75"
                                style={{ width: `${count}%`, 
                                background: "linear-gradient(to right, #8b5cf6 0%, #00d1ff 100%)", 
                            }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <span className="font-mono text-[9px] tracking-[2px] text-[#1e2a3a]">
                                SALAUDEEN RUKAYAT
                            </span>
                            <span className="font-mono text-[9px] tracking-[2px] text-[#1e2a3a]">
                                FRONTEND DEV
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <section className={cn(
                "transition-opacity duration-700", 
                count >= 100 ? "opacity-100" : "opacity-0"
                )}
            >
                {children}
            </section>
        </>
    )
}