"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"


const navLinks = [
    { label: "Home", href: "/"},
    { label: "About", href: "/about"},
    { label: "Projects", href: "/projects"},
    { label: "Resources", href: "/resources"},
]

export const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);
            setVisible(currentY < lastY || currentY < 50);
            setLastY(currentY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY]);

    return (
        <header className={cn(
            "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
            visible ? "translate-y-0" : "-translate-y-full",
            scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-2 " : "bg-transparent py-4"
        )}>
            <nav className="container mx-auto flex justify-between font-space-grotesk items-center px-6 py-2">
                {/* Logo */}
                <Link href="/" className={cn("text-[20px] font-bold transition-all duration-500", scrolled? "text-[17px]": "")}>SRT_</Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({label, href}) => (
                        <li key={label} >
                            <Link href={href} 
                                className={cn(
                                    "relative text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#818cf8] after:transition-all after:duration-300 hover:after:w-full",
                                    pathname === href && "text-foreground after:w-full"
                                )}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle/>
                    <p>
                        salaudeenrukayat04@gmail.com
                    </p>
                    
                </div>

                {/* Mobile Button */}
                <Button className="md:hidden text-foreground bg-transparent" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </Button>
            </nav>

            {/* Mobile Nav */}
            <div className={cn(
                "md:hidden overflow-hidden bg-background/80 absolute top-full left-0 w-full backdrop-blur-md border-b border-border/10 transition-all duration-500",
                menuOpen ? "max-h-96 py-4" : "max-h-0"
            )}
            aria-hidden={!menuOpen}
            >
                <ul className="flex flex-col gap-4 px-6 pb-2">
                    {navLinks.map(({label, href}) => (
                        <li key={label}>
                            <Link href={href} 
                                className={cn(
                                    "text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300",
                                    pathname === href && "text-foreground"
                                )}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="flex items-center gap-3 pt-2">
                        <ThemeToggle/>
                        <p>salaudeenrukayat04@gmail.com</p>
                    </li>
                </ul>
            </div>

        </header>
    )
}
