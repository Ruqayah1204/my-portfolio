export const Footer = () => {
    
    return (
        <footer className="bg-background/20 backdrop-blur-xl border-t border-border py-12">
            <div className="container mx-auto text-center text-sm text-muted-foreground flex justify-between flex-col md:flex-row gap-y-4 items-center px-8">
                <span>
                    &copy; {new Date().getFullYear()} Salaudeen Rukayat. All rights reserved.
                </span>
                <span>
                    Made with <span className="text-red-500 animate-pulse">❤️</span> by SRT_.
                </span>
            </div>
            

        </footer>
    )
}
