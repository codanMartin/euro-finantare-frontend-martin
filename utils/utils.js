import { withExtendedShadows } from "tailwind-extended-shadows-merge";
import { extendTailwindMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { DATE_FORMATS } from "@/utils/enums";

export const twMerge = extendTailwindMerge(withExtendedShadows);

export function cn(...inputs) {
    const twMerge = extendTailwindMerge(withExtendedShadows);
    return twMerge(clsx(inputs));
}

export async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatUnixDate(unixTimestamp, dateFormat = DATE_FORMATS.SHORT) {
    if (!unixTimestamp || isNaN(unixTimestamp)) return null;

    const newDate = new Date(unixTimestamp * 1000);
    return newDate.toLocaleString("ro-RO", {
        day: "numeric",
        month: dateFormat,
        year: "numeric",
    });
}

export function getUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}

export function buildResponse(data = null, error = null) {
    return { response: { data: data, error: error } };
}

export function generateUUID() {
    return "xxxx-xxxx-xxx-xxxx".replace(/x/g, (c) => {
        const r = Math.floor(Math.random() * 16);
        return r.toString(16);
    });
}
