import React from "react";
import { cn } from "@/lib/utils";

interface SubHeadingProps {
  title: string;
  className?: string;
  headingClassName?: string;
}

function SubHeadding({ title, className, headingClassName }: SubHeadingProps) {
  return (
    <div className={cn("my-8", className)}>
      <h1
        className={cn(
          "text-2xl lg:text-4xl text-primary-color font-playfairDisplay font-bold text-center",
          headingClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
}

export default SubHeadding;
