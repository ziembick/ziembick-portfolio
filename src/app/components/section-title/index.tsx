'use client'

import "./sectionTitle.sass"
import { cn } from "@/app/lib/utils"


type SectionTitleProps = {
    title: String,
    subtitle: String,
    className?: String
}



export const SectionTitle = ({title, subtitle, className}: SectionTitleProps) => {
    return (
        <div className={cn("sectionTitle flex flex-col gap4", className)}>
            <span className="font-mono text-sm text-emerald-400">{`.../${subtitle}`}</span>
            <h3>{title}</h3>
        </div>
    )
}