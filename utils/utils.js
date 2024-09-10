import { withExtendedShadows } from "tailwind-extended-shadows-merge";
import { extendTailwindMerge } from "tailwind-merge";
import {clsx} from "clsx";


export const twMerge = extendTailwindMerge(withExtendedShadows);

export function cn(...inputs) {
    const twMerge = extendTailwindMerge(withExtendedShadows)
    return twMerge(clsx(inputs));
}

export async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}