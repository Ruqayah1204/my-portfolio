"use client"

import { getColor, getIcon, getSpan } from "@/app/utils/stack-icons"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { stackInfo } from "@/app/utils/portfolio-data/stack";
import { createElement } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);


interface SkillObject{
    title: string;
    description: string;
    tags?: string[];
}


export const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    
    useGSAP(()=> {
        gsap.set(".skill-card", {opacity: 0, y: 30});

        ScrollTrigger.batch(".skill-card", {
            start: "top 85%",
            onEnter: (batch) => gsap.to(batch, {
                opacity: 1,
                y:0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.12,
            }),
            onLeaveBack: (batch) => gsap.set(batch, {
                opacity: 0,
                y:30,
            })
        });
    }, {scope: containerRef});


    return (
        <section className="container mx-auto relative  py-20 px-4 md:px-6 lg:px-8">
            <div className="pb-8">
                <h2 className="text-3xl font-bold">The Stack</h2>
            </div>
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 grid-flow-dense">
                {stackInfo.map((skill) => (
                    <SkillItem key={skill.title} {...skill} />
                ))}
            </div>
        </section>
    )
}

const SkillItem = (skill: SkillObject) => {
    const color = getColor(skill.title);

    return (
        <Card className={`skill-card p-8 gap-6 justify-between relative overflow-hidden ${getSpan(skill.title)}`}>
            {/* gradient top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
            />
            <div
                className="p-2 rounded-md flex items-center justify-center w-12 "
                style={{ backgroundColor: `${color}10` }} 
            >                
                {createElement(getIcon(skill.title), {style: {color}})}
            </div>

            <CardContent className="space-y-3 p-0">
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
                {skill.tags && (
                    <div className="flex gap-4 items-center flex-wrap">
                        {skill.tags?.map((item, i) => (
                            <span key={i} className="inline-block bg-foreground/10 py-2 px-4 rounded-full text-xs">{item}</span>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}



// "use client"

// import { getColor, getIcon, getSpan } from "@/app/utils/stack-icons"
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
// import { stackInfo } from "@/app/utils/portfolio-data/stack"
// import { createElement, useRef } from "react"
// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// interface SkillObject {
//   title: string
//   description: string
//   tags?: string[]
// }

// export const Skills = () => {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useGSAP(() => {
//     gsap.set(".skill-card", { opacity: 0, y: 30 })

//     ScrollTrigger.batch(".skill-card", {
//       start: "top 85%",
//       onEnter: (batch) =>
//         gsap.to(batch, {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power4.out",
//           stagger: 0.12,
//         }),
//       onLeaveBack: (batch) =>
//         gsap.set(batch, { opacity: 0, y: 30 }),
//     })
//   }, { scope: containerRef })

//   return (
//     <section className="container mx-auto relative py-20 px-4 md:px-6 lg:px-8">
//       <div className="pb-8">
//         <h2 className="text-3xl font-bold">The Stack</h2>
//       </div>
//       <div
//         ref={containerRef}
//         className="grid grid-cols-12 gap-6 grid-flow-dense"
//       >
//         {stackInfo.map((skill) => (
//           <SkillItem key={skill.title} {...skill} />
//         ))}
//       </div>
//     </section>
//   )
// }

// const SkillItem = (skill: SkillObject) => {
//   const color = getColor(skill.title)

//   return (
//     <Card className={`skill-card p-8 gap-6 justify-between relative overflow-hidden ${getSpan(skill.title)}`}>
//       <div
//         className="absolute top-0 left-0 right-0 h-px"
//         style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
//       />
//       <div
//         className="p-2 rounded-md flex items-center justify-center w-12"
//         style={{ backgroundColor: `${color}10` }}
//       >
//         {createElement(getIcon(skill.title), { style: { color } })}
//       </div>

//       <CardContent className="space-y-3 p-0">
//         <CardTitle>{skill.title}</CardTitle>
//         <CardDescription>{skill.description}</CardDescription>
//         {skill.tags && (
//           <div className="flex gap-4 items-center flex-wrap">
//             {skill.tags.map((item, i) => (
//               <span key={i} className="inline-block bg-foreground/10 py-2 px-4 rounded-full text-xs">
//                 {item}
//               </span>
//             ))}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }



// import { getColor, getIcon, getSpan } from "@/app/utils/stack-icons"
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
// import { stackInfo } from "@/app/utils/portfolio-data/stack";
// import { createElement } from "react";

// interface SkillObject{
//     title: string;
//     description: string;
//     tags?: string[];
// }

// export const Skills = () => {
    
//     return (
//         <section className="container mx-auto relative overflow-hidden py-20 px-8">
//             <div className="pb-8">
//                 <h2 className="text-3xl font-bold">The Stack</h2>
//             </div>
//             <div className="grid grid-cols-12 gap-6 grid-flow-dense ">
//                 {stackInfo.map((skill) => (
//                     <SkillItem key={skill.title} {...skill} />
//                 ))}
//             </div>
//         </section>
//     )
// }

// const SkillItem = (skill: SkillObject) => {
//     const color = getColor(skill.title);

//     return (
//         <Card
//             className={`p-8 gap-6 justify-between relative overflow-hidden ${getSpan(skill.title)}`}
//         >
//             {/* gradient top border */}
//             <div
//                 className="absolute top-0 left-0 right-0 h-px"
//                 style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
//             />
//             <div
//                 className="p-2 rounded-md flex items-center justify-center w-12 "
//                 style={{ backgroundColor: `${color}10` }} 
//             >                
//                 {createElement(getIcon(skill.title), {style: {color}})}
//             </div>

//             <CardContent className="space-y-3 p-0">
//                 <CardTitle>
//                     {skill.title}
//                 </CardTitle>
//                 <CardDescription>
//                     {skill.description}
//                 </CardDescription>
//                 {skill.tags && <div className="flex gap-4 item-center flex-wrap">
//                     {skill.tags?.map((item, i) => (
//                         <span key={i} className="inline-block bg-foreground/10 py-2 px-4 rounded-full text-xs">{item}</span>
//                     ))}
//                 </div>}
//             </CardContent>
//         </Card>
//     )
// }