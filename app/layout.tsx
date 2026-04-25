import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salaudeen Rukayat Temitope | Frontend Developer",
  description: "Frontend developer building fast, responsive, and user-friendly web applications using modern technologies like React and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={cn("font-nunito antialiased")}>
        <ThemeProvider>
          <Loader>
            <Header/>
            <main>
              {children}
            </main>
          </Loader>
        </ThemeProvider>

      </body>
    </html>
  );
}
