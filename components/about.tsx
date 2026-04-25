import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { articleData } from "@/app/utils/portfolio-data/article-data";


interface ArticleProp {
    id: number;
    title: string;
    description: string;
    link: string;
    date: string
    image: string
}

const timeline = [
    {
        id: 1,
        title: "Students taught",
        stats: "8+",
    },
    {
        id: 2,
        title: "Training conducted",
        stats: "3+",
    }
]

export const About = () => {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="absolute top-1/4 -left-20 w-100 h-100 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-12 gap-12">
                <div className="col-span-12 lg:col-span-6">
                    <div className="pb-8 space-y-2">
                        <p className="text-sm font-bold uppercase text-accent">Beyond the Code</p>
                        <h2 className="text-3xl font-bold font-space-grotesk">Teaching and Mentoring the Next Generation of Developers</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        I&apos;m dedicated to helping others grow in their software development journeys. Whether it&apos;s through workshops, one-on-one mentoring, or creating educational content, I believe in the power of knowledge sharing to drive innovation and build stronger communities.
                    </p>
                    <div className="flex gap-6 mt-8 flex-wrap font-space-grotesk">
                        {timeline.map((item) => (
                            <div key={item.id} className="inline-block  py-4 px-6 rounded-lg mt-4 mr-4">
                                <h3 className="text-3xl font-bold text-primary">{item.stats}</h3>
                                <p className="text-muted-foreground">{item.title}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
                    {articleData.map((article) => (
                        <ArticleCard key={article.id} {...article} />
                    ))}
                </div>
            </div>

        </section>
    )
}

const ArticleCard = (article: ArticleProp) => {
    return (
        <Card
            className="p-6 gap-6 justify-between relative overflow-hidden ring-0"
        >
            {/* gradient top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"
            />
            <div className="flex justify-between items-center ">
                <span className={cn(
                    "inline-block text-xs bg-primary/10 py-1 px-3 rounded-full",
                    article.id === 1? "text-accent" : "text-muted-foreground"
                )}>
                    {article.id === 1 ? "Highlight": "Article"}
                </span>
                 <span className="text-muted-foreground text-xs">{article.date}</span> {/* Dec 2024  */}
            </div>

            <CardContent className="space-y-3 p-0">
                <CardTitle>
                    {article.title}
                </CardTitle>
                <CardDescription>
                    {article.description}
                </CardDescription>
                
            </CardContent>
        </Card>
    )
}