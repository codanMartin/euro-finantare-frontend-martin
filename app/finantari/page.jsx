import FinancingCardInListing from "@/components/pages/financing-page/financing-card-in-listing";
import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import { getFinancingListings } from "@/services/financing-service";

export const dynamic = "force-dynamic";

const FinancingListing = async () => {
    const financingData = await getFinancingListings();
    const { data, error } = financingData.response;

    return (
        <div className="flex w-full max-w-[1750px] flex-1 justify-center">
            <div className="flex h-full w-full flex-1 flex-col items-center">
                <BreadcrumbPageList />
                <div className="flex w-full flex-1 flex-col">
                    {!error && data && Array.isArray(data) && data.length > 0 && (
                        <div className="grid w-full grid-cols-1 items-center gap-8 border-x p-8 md:grid-cols-2 lg:gap-16 lg:p-16">
                            {data.map((availableFinancing, availableFinancingIdx) => (
                                <FinancingCardInListing
                                    availableFinancing={availableFinancing}
                                    key={availableFinancingIdx}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FinancingListing;
