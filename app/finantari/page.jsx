import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import {getFinancingListings} from "@/services/financing-service";
import CardV1 from "@/components/pages/financing-page/card-v1";
import {Fragment} from "react";
import CardV2 from "@/components/pages/financing-page/card-v2";

export const dynamic = 'force-dynamic';

const Financing = async () => {
    const financingData = await getFinancingListings();
    const {data, error} = financingData.response

    return (
        <Fragment>
            <div className="flex flex-1 w-full justify-center max-w-[1750px]">
                <div className="flex flex-col w-full flex-1 items-center h-full">
                    <BreadcrumbPageList/>
                    <div className="flex flex-col flex-1 w-full">
                        {!error && data && Array.isArray(data) && data.length > 0 && (
                            <div
                                className="p-8 lg:p-16 gap-8 lg:gap-16 grid grid-cols-1 border-x items-center md:grid-cols-2 w-full">
                                {data.map((availableFinancing, availableFinancingIdx) => (
                                    <CardV2 availableFinancing={availableFinancing} key={availableFinancingIdx}/>
                                ))}
                                {data.map((availableFinancing, availableFinancingIdx) => (
                                    <CardV1 availableFinancing={availableFinancing} key={availableFinancingIdx}/>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Financing;
