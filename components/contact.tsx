"use client"

import { personalData } from "@/app/utils/portfolio-data/personal-data"
import { Mail, MapPin, Phone, } from "lucide-react"
import Link from "next/link"
import { ElementType } from "react"
import { ContactForm } from "./contact-form"
import SectionReveal from "./section-reveal"

interface ContactCardProps {
  href: string
  icon: ElementType
  label: string
  value: string
  color: string
  external?: boolean
}

const contactItems = (data: typeof personalData): ContactCardProps[] => [
  {
    href: `mailto:${data.email}`,
    icon: Mail,
    label: "Email",
    value: data.email,
    color: "#8b5cf6",
    external: true,
  },
  {
    href: `tel:${data.phone}`,
    icon: Phone,
    label: "Phone",
    value: data.phone,
    color: "#00d1ff",
    external: true,
  },
  {
    href: `https://maps.google.com/?q=${data.location}`,
    icon: MapPin,
    label: "Location",
    value: data.location,
    color: "#f472b6",
    external: true,
  },
]

export const Contact = () => {

  return (
    <section id="contact" className="relative py-20">

      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* heading */}
        <SectionReveal direction="up">
            <div className="pb-10 space-y-2">
            <p className="text-sm font-bold uppercase text-accent tracking-widest">Get In Touch</p>
            <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">
                Let&apos;s Work Together
            </h2>
            <p className="max-w-md text-muted-foreground text-sm md:text-base">
                I build user-focused digital products that help businesses grow and
                solve real problems. You can also join my next cohort — ready when you are.
            </p>
            </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20">

          {/* Form */}
          {/* <SectionReveal direction="right"> */}
            <ContactForm/>
          {/* </SectionReveal> */}

          {/* Contact cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center overflow-hidden">
            {contactItems(personalData).map((item) => (
                    <ContactCard key={item.label} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

const ContactCard = ({ href, icon: Icon, label, value, color, external }: ContactCardProps) => (
  <SectionReveal direction="left">
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-foreground/2 hover:bg-foreground/5 hover:border-foreground/10 transition-all duration-300"
    >
      {/* icon box */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
  
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          {label}
        </span>
        <span className="text-sm font-medium group-hover:text-secondary-foreground transition-colors truncate">
          {value}
        </span>
      </div>
  
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${color}08` }}
      />
    </Link>

  </SectionReveal>
)