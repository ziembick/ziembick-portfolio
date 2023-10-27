import { cn } from "@/app/lib/utils";
import "./horizontal.sass"

type HorizontalDividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn("horizontal-divider", className)}
    ></div>
  );
};
