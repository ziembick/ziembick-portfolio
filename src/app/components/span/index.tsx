import { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Span = ({children, className, ...props}: ButtonProps) => {
    return (
        <span
        className={cn(
            'py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2transition-all disabled:opacity-50',
            className
        )}
        {...props}
        >
            {children}
        </span>
    )
}