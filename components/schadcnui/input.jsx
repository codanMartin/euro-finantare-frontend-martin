import { cn } from "@/utils/utils";
import * as React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            className={cn(
                "flex h-10 w-full border-b border-gray-300 bg-transparent px-3 py-2" +
                    "placeholder:text-gray/70 focus:outline-none disabled:cursor-not-allowed" +
                    "hover:border-b-gray-500 focus-visible:border-b-eu-blue disabled:opacity-50",
                className,
            )}
            ref={ref}
            {...props}
            type={type}
        />
    );
});
Input.displayName = "Input";

export { Input };
