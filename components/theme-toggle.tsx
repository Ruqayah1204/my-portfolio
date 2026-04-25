"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const {resolvedTheme, setTheme} = useTheme();

    return (
        <Button 
            className="p-2 rounded-md border border-border bg-background text-accent"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
            {/* {theme} */}
            {resolvedTheme === "dark" || resolvedTheme ==="system" ? <Sun size={16}/> : <Moon size={16} />}
        </Button>
    )
}