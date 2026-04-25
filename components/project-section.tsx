import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { CodeXml, Globe } from "lucide-react";
import { projectData } from "@/app/utils/portfolio-data/projects";

interface ProjectProp {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    date: string;
    images: string;
}

export const FeaturedProject = () => {
    return (
        <section className="container mx-auto relative overflow-hidden py-20 px-8">
            <div className="pb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {projectData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}

const ProjectCard = (project : ProjectProp) => {
    return (
        <Card className="p-0 col-span-12 md:col-span-6 border-none rounded-sm gap-0 ">
            <div className="relative overflow-hidden aspect-video group">
                <Image 
                    src={project.images} 
                    alt={project.name} 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
            </div>
            <CardContent className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <div className="flex gap-4 items-center">
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary p-3 rounded-full inline-flex items-center border hover:border-primary transition-colors duration-500 group">
                            <CodeXml className="inline-block group-hover:skew-x-18 transition-all duration-500" size={20}  />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-primary text-background p-3 rounded-full inline-flex items-center">
                            <Globe className="inline-block" size={20}  />
                        </a>
                    </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-4 item-center flex-wrap">
                    {project.tools.map((tool, i) => (
                        <span key={i} className="inline-block bg-foreground/10 py-2 px-4 rounded-full text-xs">{tool}</span>
                    ))}
                </div>
            </CardContent>

        </Card>
    )
}