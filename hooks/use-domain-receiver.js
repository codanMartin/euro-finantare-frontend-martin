import { headers } from "next/headers";

export function useDomainReceiver() {
    const headersList = headers();
    const fullUrl = headersList.get("x-url") || "";
    const pathname = headersList.get("x-pathname");
    const domain = headersList.get("x-origin");

    return { domain, fullUrl, pathname };
}
