import { FileCode, Palette, Atom, LayoutTemplate, GitBranch, CodeXml, LucideIcon } from 'lucide-react';

export const getIcon = (skill: string): LucideIcon => {
    const skillCase = skill.toLowerCase()

    switch (skillCase) {
        case "modern frontend":
            return Atom;
        case "typescript":
            return FileCode;
        case "ui styling":
            return Palette;
        case "cms":
            return LayoutTemplate;
        case "version control & ci/cd":
            return GitBranch;
        case "core":
            return CodeXml;
        
        default:
            return FileCode
    }
};

export const getColor = (skill: string): string => {
    const skillCase = skill.toLowerCase()
    
    switch (skillCase) {
        case "modern frontend":
            return "#00D1FF";
        case "typescript":
            return "#3178C6";
        case "ui styling":
            return "#EC4899";
        case "cms":
            return "#8b5cf6";
        case "version control & ci/cd":
            return "#F05033";
        case "core":
            return "#F7DF1E";
        
        default:
            return "#FFFFFF"
    }

}

export const getSpan = (title: string) => {
  switch (title) {
    case "Modern Frontend":
      return "md:col-span-6";
    case "Version Control & CI/CD":
      return "md:col-span-6";
    default:
      return "sm:col-span-6 md:col-span-3";
  }
};

