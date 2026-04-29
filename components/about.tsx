"use client"

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { articleData } from "@/app/utils/portfolio-data/article-data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger, SplitText);


interface ArticleProp {
    id: number;
    title: string;
    description: string;
    date: string
}

const timeline = [
  { id: 1, title: "Students taught", stats: "8+" },
  { id: 2, title: "Training conducted", stats: "3+" },
]

export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(()=> {
        
        const split = new SplitText(".about-desc", {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
        });

        gsap.from(split.lines, {
            opacity: 0,
            y:30,
            rotateX: -45,
            stagger: 0.015,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-desc",
                start: "top 85%",
                toggleActions: "play none none reset",
            }
        });

        // article cards staggered
        gsap.fromTo(".article-card", 
            {opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger:".article-card",
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, {scope: containerRef})


    return (
        <section id="about" className="relative py-16 md:py-20">
            {/* <div className="absolute top-1/4 -left-20 w-100 h-100 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-accent/10 blur-[120px] rounded-full pointer-events-none" /> */}

            <div ref={containerRef} 
                className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 "
            >
                <div className="">
                    <div className="pb-8 space-y-2">
                        <p className="text-sm font-bold uppercase text-accent">Beyond the Code</p>
                        <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">
                            Teaching and Mentoring the Next Generation of Developers
                        </h2>
                    </div>

                    <p className="about-desc text-base md:text-lg text-muted-foreground leading-relaxed">
                        I&apos;m dedicated to helping others grow in their software development 
                        journeys. Whether it&apos;s through workshops, one-on-one mentoring, or 
                        creating educational content, I believe in the power of knowledge 
                        sharing to drive innovation and build stronger communities.
                    </p>

                    <div className="flex gap-4 md:gap-6 mt-6 lg:mt-8 flex-wrap font-space-grotesk">
                        {timeline.map((item) => (
                            <div key={item.id} className="article-card inline-block py-4 px-6 bg-primary/5 border border-primary/10 rounded-lg">
                                <h3 className="text-3xl font-bold text-primary">{item.stats}</h3>
                                <p className="text-muted-foreground text-sm">{item.title}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    {articleData.map((article) => (
                        <ArticleCard key={article.id} {...article} />
                    ))}
                </div>
            </div>

        </section>
    )
}

const ArticleCard = ({id, date, title, description}: ArticleProp) => {
    return (
        <Card
            className="article-card p-6 gap-6 justify-between relative overflow-hidden ring-0"
        >
            {/* gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"/>
            
            <div className="flex justify-between items-center ">
                <span className={cn(
                    "inline-block text-xs bg-primary/10 py-1 px-3 rounded-full",
                    id === 1? "text-accent" : "text-muted-foreground"
                )}>
                    {id === 1 ? "Highlight": "Article"}
                </span>
                 <span className="text-muted-foreground text-xs">{date}</span> {/* Dec 2024  */}
            </div>

            <CardContent className="space-y-3 p-0">
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                
            </CardContent>
        </Card>
    )
}