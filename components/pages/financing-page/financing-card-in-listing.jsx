import {
    FaCalendar,
    FaCalendarXmark,
    FaLandmark,
    FaMagnifyingGlassChart,
    FaMapLocationDot,
    FaWallet,
} from "react-icons/fa6";
import { PROJECT_STATUS, PROJECT_STATUS_DISPLAY } from "@/utils/enums";
import { cn, formatUnixDate, getUnixTimestamp } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const FinancingCardInListing = ({ availableFinancing }) => {
    const dateNowInUnix = getUnixTimestamp(new Date());

    return (
        <div className="group flex w-full flex-col border border-gray-200 duration-300 hover:scale-[1.01] hover:border-white hover:shadow-all-3xl">
            <div className="flex max-h-[72px] min-h-[72px] w-full items-center bg-eu-blue/5 p-4">
                <Link
                    href={`/finantari/${availableFinancing["slug"]}`}
                    className="line-clamp-2 w-full text-lg font-semibold text-black group-hover:underline">
                    {availableFinancing["name"]}
                </Link>
                <Image
                    src={availableFinancing["program"]["type"]["logo"]["path"]}
                    alt={availableFinancing["program"]["type"]["logo"]["title"] || ""}
                    width={50}
                    height={50}
                    className="ml-4"
                />
                <Image
                    src={availableFinancing["program"]["where_to_apply"]["logo"]["path"]}
                    alt={availableFinancing["program"]["where_to_apply"]["logo"]["title"] || ""}
                    width={50}
                    height={50}
                    className="ml-2"
                />
            </div>
            <div className="flex h-full w-full flex-1 flex-col p-4">
                <div className="flex w-full flex-row items-center space-x-2 pb-2">
                    <span className="line-clamp-2 w-full text-center font-semibold">
                        {availableFinancing["program"]["name"]}
                    </span>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 py-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="grid w-full gap-2">
                        <IconWithSvg
                            content={`${availableFinancing["total_budget"]} ${availableFinancing["budget_currency"]}`}
                            svgWrapperClassName="border-sky-600 bg-sky-100"
                            title="Bugetul total:">
                            <FaWallet className="text-lg text-sky-600" />
                        </IconWithSvg>

                        <IconWithSvg
                            content={`${availableFinancing["min_budget"] === 0 ? `max ${availableFinancing["max_budget"]}` : `${availableFinancing["min_budget"]} - ${availableFinancing["max_budget"]}`} ${availableFinancing["budget_currency"]}`}
                            svgWrapperClassName="border-sky-600 bg-sky-100"
                            title="Bugetul unui proiect:">
                            <FaLandmark className="text-lg text-sky-600" />
                        </IconWithSvg>

                        <IconWithSvg
                            content={`${Object.keys(availableFinancing["supported_regions"]).length !== 8 ? Object.values(availableFinancing["supported_regions"]).map((value, idx) => `${value}${idx + 1 < Object.keys(availableFinancing["supported_regions"]).length ? ", " : ""}`) : "Nivel National"}`}
                            svgWrapperClassName="border-sky-600 bg-sky-100"
                            title="Regiuni:">
                            <FaMapLocationDot className="text-lg text-sky-600" />
                        </IconWithSvg>
                    </div>
                    <div className="grid h-min w-full gap-2">
                        <IconWithSvg
                            content={PROJECT_STATUS_DISPLAY[availableFinancing["status"]]}
                            svgWrapperClassName={cn(
                                availableFinancing["status"] === PROJECT_STATUS.OPENED &&
                                    "bg-green-100 border-green-600",
                                availableFinancing["status"] === PROJECT_STATUS.CLOSED &&
                                    "bg-red-100 border-red-600",
                                availableFinancing["status"] === PROJECT_STATUS.PENDING &&
                                    "bg-yellow-50 border-yellow-500",
                            )}
                            contentClassName={cn(
                                "font-semibold",
                                availableFinancing["status"] === PROJECT_STATUS.OPENED &&
                                    "text-green-600",
                                availableFinancing["status"] === PROJECT_STATUS.CLOSED &&
                                    "text-red-600",
                                availableFinancing["status"] === PROJECT_STATUS.PENDING &&
                                    "text-yellow-500",
                            )}
                            title="Status:">
                            <FaMagnifyingGlassChart
                                className={cn(
                                    "text-lg",
                                    availableFinancing["status"] === PROJECT_STATUS.OPENED &&
                                        "text-green-600",
                                    availableFinancing["status"] === PROJECT_STATUS.CLOSED &&
                                        "text-red-600",
                                    availableFinancing["status"] === PROJECT_STATUS.PENDING &&
                                        "text-yellow-500",
                                )}
                            />
                        </IconWithSvg>
                        <IconWithSvg
                            content={`${availableFinancing["start_date"] ? formatUnixDate(availableFinancing["start_date"]) : "-"}`}
                            svgWrapperClassName={cn(
                                availableFinancing["end_date"]
                                    ? availableFinancing["end_date"] < dateNowInUnix
                                        ? "bg-red-100 border-red-600"
                                        : "bg-green-100 border-green-600"
                                    : "bg-green-100 border-green-600",
                            )}
                            contentClassName={cn(
                                "font-semibold",
                                availableFinancing["end_date"]
                                    ? availableFinancing["end_date"] < dateNowInUnix
                                        ? "text-red-600"
                                        : "text-green-600"
                                    : "text-green-600",
                            )}
                            title="Dată deschidere apel:">
                            <FaCalendar
                                className={cn(
                                    "text-lg",
                                    availableFinancing["end_date"]
                                        ? availableFinancing["end_date"] < dateNowInUnix
                                            ? "text-red-600"
                                            : "text-green-600"
                                        : "text-green-600",
                                )}
                            />
                        </IconWithSvg>
                        <IconWithSvg
                            content={`${availableFinancing["end_date"] ? formatUnixDate(availableFinancing["end_date"]) : "-"}`}
                            svgWrapperClassName="border-red-600 bg-red-100"
                            title="Dată limită depunere:"
                            contentClassName="font-semibold text-red-600">
                            <FaCalendarXmark className="text-lg text-red-600" />
                        </IconWithSvg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancingCardInListing;

const IconWithSvg = ({ children, title, content, svgWrapperClassName, contentClassName }) => {
    return (
        <div className="col-span-1 flex h-min space-x-4">
            <div
                className={cn(
                    "flex max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] items-center justify-center rounded-full border-[4px]",
                    svgWrapperClassName,
                )}>
                {children}
            </div>
            <div className="flex flex-col">
                <span className="font-bold">{title}</span>
                <span className={cn(contentClassName)}>{content}</span>
            </div>
        </div>
    );
};
