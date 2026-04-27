import Link from "next/link"
import { Download } from "lucide-react"
import { personalData } from "@/app/utils/portfolio-data/personal-data"


export const HeroSection = () => {
    return (
        <section className="container mx-auto min-h-[50vh] lg:min-h-screen flex flex-col justify-center item-center relative overflow-hidden px-8">
            <div className="hero-bg"/>
                <div className="relative z-10 max-w-4xl lg:px-8 py-4">
                    <h1 className="text-5xl md:text-6xl leading-[1.1] font-space-grotesk font-bold tracking-tight mb-6 bg-linear-to-r from-foreground to-[#94a3b8] bg-clip-text text-transparent"
                        // style={{
                        //     background: "linear-gradient(to right, #fff, #94a3b8)",
                        //     WebkitBackgroundClip: "text",
                        //     WebkitTextFillColor: "transparent",
                        // }}
                    >
                        Salaudeen Rukayat T. —
                        Crafting Pixel-Perfect Digital Experiences.
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-space-grotesk max-w-2xl mb-10 leading-relaxed font-medium ">
                        I&apos;m {""}
                        <span className="text-primary dark:text-white font-bold">{personalData.name}</span>{" "}
                        I build accessible, performance-driven web interfaces and delightful user experiences with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href={personalData.resume}
                            target="_blank"
                            className="group relative px-8 py-1.5 rounded-xl bg-linear-to-r from-primary to-accent text-foreground uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,209,255,0.3)]"
                        >
                            <span className="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]" />
                            <span className="relative z-10 font-medium text-sm tracking-wide inline-flex items-center gap-2">
                                Download CV
                                <Download
                                    size={15}
                                    className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5"
                                />
                            </span>
                        </Link>

                        {/* Ghost — glow + text color shift */}
                        <Link
                            href="#contact"
                            className="gradient-border text-foreground px-5 py-2 inline-flex items-center gap-2 transition-all duration-300 hover:text-primary hover:shadow-[0_0_18px_rgba(129,140,248,0.25)] text-sm tracking-wide"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            {/* </div> */}
        </section>

    )
}