"use server";

import { financingListing } from "@/services/filler-data";
import { buildResponse, delay } from "@/utils/utils";

const standardErrorMessage =
    "Ops! Se pare ca am intampinat o problema. Va rugam sa incercati mai tarziu";

export async function getFinancingListings() {
    try {
        return buildResponse([...financingListing], null);
    } catch (error) {
        console.error(error);
        return buildResponse(null, { message: standardErrorMessage });
    }
}

export async function getFinancingBySlug(slug) {
    try {
        const desiredFinancing = financingListing.find((financing) => financing.slug === slug);
        return buildResponse(desiredFinancing ? desiredFinancing : null, null);
    } catch (error) {
        console.error(error);
        return buildResponse(null, { message: standardErrorMessage });
    }
}
