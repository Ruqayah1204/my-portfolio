"use client"

import emailjs from "@emailjs/browser"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import {ChangeEvent, FormEvent, useState } from "react"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        subject: "", 
        message: "",
    });
    const [error, setError] = useState<Record<string, string>>({});

    const [isSending, setIsSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [submitError, setSubmitError] = useState(false)

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value }))

        if(error[name]) setError(prev => ({...prev, [name]: ""}))
    }

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email";

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setError(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validate()) return

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
        const options = {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }

        // const autoResponseTemplateID = process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID ?? ""

        const templateParams ={
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
        }

        try{
            setIsSending(true)
            const res = await emailjs.send(serviceID, templateID, templateParams, options)

            // auto-response for testing
            // await emailjs.send(serviceID, autoResponseTemplateID, templateParams, options)

            console.log("Email sent successfully:", res)

            if(res.status === 200){
                setIsSending(false);
                setSent(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
                setTimeout(() => setSent(false), 15000)
            }
            
        }catch (error) {
            console.error("Error sending email:", error, error instanceof Error ? error.message : "")
            setIsSending(false);
            setSubmitError(true);
            setTimeout(() => setSubmitError(false), 15000)
        }

    }

    return (
        <Card className="lg:col-span-6 p-6 px-0 md:py-8 relative overflow-hidden border-foreground/5 bg-transparent ring-0">
            {/* <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" /> */}

            {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Send size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                                Name
                            </Label>
                            <div className="relative">
                                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    // required
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={changeHandler}
                                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg bg-foreground/3 border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                                    />
                            </div>
                            {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                                Email
                            </Label>
                            <div className="relative">
                                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={changeHandler}
                                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg bg-foreground/3 border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                                />
                            </div>
                            {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                            Subject
                        </Label>
                        <Input
                            type="text"
                            name="subject"
                            placeholder="What's this about?"
                            value={formData.subject}
                            onChange={changeHandler}
                            className="w-full px-4 py-2.5 text-sm rounded-lg bg-foreground/3 border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        />
                        {error.subject && <p className="text-red-500 text-xs">{error.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                            Message
                        </Label>
                        <div className="relative">
                            <MessageSquare size={14} className="absolute left-3 top-3 text-muted-foreground" />
                            <Textarea
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project or idea..."
                            value={formData.message}
                            onChange={changeHandler}
                            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg bg-foreground/3 border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                            />
                        </div>
                        {error.message && <p className="text-red-500 text-xs">{error.message}</p>}
                    </div>

                    {submitError && (
                        <p className="text-red-500 text-sm text-center">
                            Something went wrong. Please try again or email me directly.
                        </p>
                    )}

                    {/* Submit */}
                    <Button
                    type="submit"
                    disabled={isSending}
                    className={cn(
                        "group relative overflow-hidden rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2",
                        "border border-primary text-primary-foreground",
                        isSending ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
                    )}
                    >
                    <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]" />
                    <span className="relative z-10 flex items-center gap-2">
                        {isSending ? "Sending..." : "Send Message"}
                        <Send size={14} className={cn("transition-transform duration-300", isSending ? "animate-pulse" : "group-hover:translate-x-1")} />
                    </span>
                    </Button>
                </form>
            )}
        </Card>
    )
}