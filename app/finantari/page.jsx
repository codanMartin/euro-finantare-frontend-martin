import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import {PROJECT_STATUS, PROJECT_STATUS_DISPLAY} from "@/utils/enums";
import {cn, formatUnixDate, getUnixTimestamp} from "@/utils/utils";
import {getFinancingListings} from "@/services/financing-service";
import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import useDomainReceiver from "@/hooks/use-domain-receiver";

export const dynamic = 'force-dynamic';

const Financing = async () => {
    const financingData = await getFinancingListings();
    const dateNowInUnix = getUnixTimestamp(new Date());
    const {data, error} = financingData.response

    return (
        <Fragment>
            <div className="flex flex-1 w-full justify-center max-w-[1750px]">
                <div className="flex flex-col w-full flex-1 items-center h-full">
                    <BreadcrumbPageList/>
                    <div className="flex flex-1 w-full">
                    {!error && data && Array.isArray(data) && data.length > 0 && (
                            <div
                                className="p-8 lg:p-16 gap-8 lg:gap-16 grid grid-cols-1 border-x items-center md:grid-cols-2 w-full">
                                {data.map(availableFinancing => (
                                    <div
                                        className="flex flex-col w-full border border-gray-200 hover:border-white hover:shadow-all-3xl hover:scale-[1.01] duration-300">
                                        <div
                                            className="flex items-center w-full p-4 min-h-[72px] max-h-[72px] bg-eu-blue/5">
                                            <Link href={`/finantari/${availableFinancing["slug"]}`}
                                                  className="line-clamp-2 text-black text-lg w-full font-semibold hover:underline">
                                                {availableFinancing["name"]}
                                            </Link>
                                            <Image src={availableFinancing["program"]["type"]["logo"]["path"]}
                                                   alt={availableFinancing["program"]["type"]["logo"]["title"] || ""}
                                                   width={50} height={50} className="ml-4"/>
                                            <Image src={availableFinancing["program"]["where_to_apply"]["logo"]["path"]}
                                                   alt={availableFinancing["program"]["where_to_apply"]["logo"]["title"] || ""}
                                                   width={50} height={50} className="ml-2"/>
                                        </div>

                                        <div className="flex flex-1 w-full h-full flex-col p-4">
                                            <div className="flex items-center flex-row w-full pb-2 space-x-2">
                                            <span className="line-clamp-2 text-center w-full font-semibold">
                                                {availableFinancing["program"]["name"]}
                                            </span>
                                            </div>

                                            <div
                                                className="flex flex-col space-y-4 xl:space-y-0 items-start xl:flex-row xl:justify-between w-full py-2">
                                                <div className="flex flex-col">
                                                    <div className="flex flex-nowrap items-end">
                                        <span className="text-black font-semibold text-nowrap">
                                            Buget total:&nbsp;
                                        </span>
                                                        <span className="text-gray-400 text-nowrap">
                                            {availableFinancing["total_budget"]} {availableFinancing["budget_currency"]}
                                        </span>
                                                    </div>
                                                    <div className="flex flex-nowrap items-end">
                                        <span className="text-black font-semibold text-nowrap">
                                            Valoare proiect:&nbsp;
                                        </span>
                                                        <span className="text-gray-400 text-nowrap">
                                            {availableFinancing["min_budget"] === 0 ? `max ${availableFinancing["max_budget"]}` : `${availableFinancing["min_budget"]} - ${availableFinancing["max_budget"]}`} {availableFinancing["budget_currency"]}
                                        </span>
                                                    </div>
                                                    <div className="flex flex-nowrap items-end">
                                        <span className="text-black font-semibold text-nowrap">
                                            Regiuni:&nbsp;
                                        </span>
                                                        <span className="text-gray-400 text-nowrap">
                                            {Object.keys(availableFinancing["supported_regions"]).length !== 8 ? Object.values(availableFinancing["supported_regions"])
                                                .map((value, idx) => `${value}${idx + 1 < Object.keys(availableFinancing["supported_regions"]).length ? ", " : ""}`) : "Nivel National"}
                                        </span>
                                                    </div>
                                                </div>
                                                <div className={"flex"}>
                                                    <div
                                                        className={cn(availableFinancing["status"] === PROJECT_STATUS.OPENED && "bg-green-600", availableFinancing["status"] === PROJECT_STATUS.CLOSED && "bg-red-600", availableFinancing["status"] === PROJECT_STATUS.PENDING && "bg-orange-400", "h-min text-white px-2 py-1")}>
                                        <span
                                            className="text-nowrap">{PROJECT_STATUS_DISPLAY[availableFinancing["status"]]}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="w-full flex flex-col xl:flex-row xl:justify-between pt-2 text-sm">
                                                <div className="flex flex-nowrap w-min space-x-2">
                                                    <span className="text-nowrap">Dată deschidere apel:</span>
                                                    <span
                                                        className={cn("text-nowrap font-semibold", availableFinancing["end_date"] ? availableFinancing["end_date"] < dateNowInUnix ? "text-red-600" : "text-green-600" : "text-green-600")}>
                                        {availableFinancing["start_date"] ? formatUnixDate(availableFinancing["start_date"]) : "-"}
                                    </span>
                                                </div>
                                                <div className="flex flex-nowrap w-min space-x-2">
                                                    <span className="text-nowrap">Dată limită depunere:</span>
                                                    <span className="text-nowrap text-red-600 font-semibold">
                                        {availableFinancing["end_date"] ? formatUnixDate(availableFinancing["end_date"]) : "-"}
                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
