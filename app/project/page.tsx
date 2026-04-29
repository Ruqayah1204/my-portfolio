import Image from "next/image";
import { CodeXml, Globe } from "lucide-react";
import { projectData } from "@/app/utils/portfolio-data/projects";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

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
export default function Project() {
  return (
    <section id="projects" className="container mx-auto relative py-10 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="pb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ name, description, tools, code, demo, images }: ProjectProp) => (
  <Card className="p-0 border-none rounded-sm gap-0 overflow-hidden">
    
    {/* Image */}
    <div className="relative overflow-hidden aspect-video group">
      <Image
        src={images}
        alt={name}
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <CardContent className="space-y-3 p-4 md:p-6">
      
      {/* Title + Links */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <CardTitle className="text-base md:text-lg leading-tight">{name}</CardTitle>
        <div className="flex gap-2 items-center shrink-0">
          <Link
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 text-primary p-2 md:p-3 rounded-full inline-flex items-center border hover:border-primary transition-colors duration-500 group"
          >
            <CodeXml className="group-hover:skew-x-18 transition-all duration-500" size={18} />
          </Link>
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background p-2 md:p-3 rounded-full inline-flex items-center"
          >
            <Globe size={18} />
          </Link>
        </div>
      </div>

      <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>

      {/* Tools */}
      <div className="flex gap-2 items-center flex-wrap">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="inline-block bg-foreground/10 py-1 px-3 rounded-full text-xs"
          >
            {tool}
          </span>
        ))}
      </div>

    </CardContent>
  </Card>
)









// export default function Project() {
//     return (
//         <section className="container mx-auto relative overflow-hidden py-10 md:py-20 px-8">
//             <div className="pb-8">
//                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Featured Projects</h2>
//             </div>
//             <div className="grid grid-cols-12 gap-6">
//                 {projectData.map((project) => (
//                     <ProjectCard key={project.id} {...project} />
//                 ))}
//             </div>
//         </section>
//     )
// }

// const ProjectCard = (project : ProjectProp) => (
//     <Card className="p-0 col-span-12 md:col-span-6 border-none rounded-sm gap-0 ">
//         <div className="relative overflow-hidden aspect-video group">
//             <Image 
//                 src={project.images} 
//                 alt={project.name} 
//                 width={800} 
//                 height={600} 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//             />
//         </div>
//         <CardContent className="space-y-3 p-6">
//             <div className="flex items-center justify-between">
//                 <CardTitle>{project.name}</CardTitle>
//                 <div className="flex gap-4 items-center">
//                     <Link href={project.code} target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary p-3 rounded-full inline-flex items-center border hover:border-primary transition-colors duration-500 group">
//                         <CodeXml className="inline-block group-hover:skew-x-18 transition-all duration-500" size={20}  />
//                     </Link>
//                     <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-primary text-background p-3 rounded-full inline-flex items-center">
//                         <Globe className="inline-block" size={20}  />
//                     </Link>
//                 </div>
//             </div>
//             <CardDescription>{project.description}</CardDescription>
//             <div className="flex gap-4 item-center flex-wrap">
//                 {project.tools.map((tool, i) => (
//                     <span key={i} className="inline-block bg-foreground/10 py-2 px-4 rounded-full text-xs">{tool}</span>
//                 ))}
//             </div>
//         </CardContent>

//     </Card>
// )
