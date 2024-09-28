import {headers} from "next/headers";

export default function useDomainReceiver() {
    const headerList = headers();
    const domain = headerList.get("x-forwarded-host") || headerList.get("host") || "beta.popstarz.ai";

    return {domain}
}