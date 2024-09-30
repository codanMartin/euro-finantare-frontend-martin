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
                  changeFrequency: "always",
              }))
            : [];

    return [
        {
            url: `${process.env.NEXT_PULBIC_BASE_URL}`,
            changeFrequency: "daily",
        },
        {
            url: `${process.env.NEXT_PULBIC_BASE_URL}/colectare-date`,
            changeFrequency: "weekly",
        },
        {
            url: `${process.env.NEXT_PULBIC_BASE_URL}/finantari`,
            changeFrequency: "always",
        },
        ...financingList,
    ];
}
