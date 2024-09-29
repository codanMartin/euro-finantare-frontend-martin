import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import { getFinancingListings } from "@/services/financing-service";
import CardV1 from "@/components/pages/financing-page/card-v1";
import CardV2 from "@/components/pages/financing-page/card-v2";

export const dynamic = "force-dynamic";

const Financing = async () => {
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
                                <CardV2
                                    availableFinancing={availableFinancing}
                                    key={availableFinancingIdx}
                                />
                            ))}
                            {data.map((availableFinancing, availableFinancingIdx) => (
                                <CardV1
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

export default Financing;
