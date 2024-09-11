import {cn} from "@/utils/utils";
import * as React from "react"

const Input = React.forwardRef(
    ({className, type, ...props}, ref) => {
        return (
            <input className={cn(
                       "flex h-10 w-full bg-transparent border-b border-gray-300 px-3 py-2" +
                       "placeholder:text-gray/70 focus:outline-none disabled:cursor-not-allowed " +
                       "disabled:opacity-50 hover:border-b-gray-500 focus-visible:border-b-eu-blue",
                       className
                   )} ref={ref} {...props} type={type}/>
        )
    }
)
Input.displayName = "Input"

export {Input}
