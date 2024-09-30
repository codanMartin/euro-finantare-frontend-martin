import { fetchFinancingListings } from "@/services/financing-service";

export default async function sitemap() {
    const financingData = await fetchFinancingListings();
    const { data: financingListData, error: financingListError } = financingData.response;

    const financingList =
        !financingListError &&
        financingListData &&
        Array.isArray(financingListData) &&
        financingListData.length > 0
            ? financingListData.map(({ slug }) => ({
                  url: `${process.env.NEXT_PULBIC_BASE_URL}/finantari/${slug}`,
              }))
            : [];

    return [
        { url: `${process.env.NEXT_PULBIC_BASE_URL}` },
        { url: `${process.env.NEXT_PULBIC_BASE_URL}/colectare-date` },
        { url: `${process.env.NEXT_PULBIC_BASE_URL}/finantari` },
        ...financingList,
    ];
}
