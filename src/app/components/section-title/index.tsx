'use client'


import { cn } from "@/app/lib/utils"


type SectionTitleProps = {
    title: String,
    subtitle: String,
    className?: String
}



export const SectionTitle = ({title, subtitle, className}: SectionTitleProps) => {
    return (
        <div className={cn("flex flex-col gap4", className)}>
            <span className="font-mono text-sm text-emerald-400">{`.../${subtitle}`}</span>
            <h3 className="text-3xl font-medium">{title}</h3>
        </div>
    )
}