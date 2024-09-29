import { DATE_FORMATS, LONG_PROJECT_STATUS_DISPLAY, PROJECT_STATUS } from "@/utils/enums";
import { cn, formatUnixDate } from "@/utils/utils";
import { FaCircle } from "react-icons/fa6";

export const dynamic = "force-dynamic";

const FinancingAvailability = ({ data, dateNowInUnix }) => {
    return (
        <div className="flex items-center border-b border-gray-200 px-8 py-4 shadow-b-sm lg:px-16 xl:shadow-r-sm">
            <ul className="flex flex-col space-y-1 font-semibold">
                <li
                    className={cn(
                        "flex flex-nowrap items-center font-bold",
                        data.status === PROJECT_STATUS.OPENED && "text-green-600",
                        data.status === PROJECT_STATUS.CLOSED && "text-red-600",
                        data.status === PROJECT_STATUS.PENDING && "text-orange-400",
                    )}>
                    <FaCircle className={"mb-[3px] mr-2 animate-pulse"} />
                    <span>{LONG_PROJECT_STATUS_DISPLAY[data.status]}</span>
                </li>
                <li
                    className={cn(
                        "ml-[24px]",
                        data.end_date
                            ? data.end_date < dateNowInUnix
                                ? "text-red-600"
                                : "text-green-600"
                            : "text-green-600",
                    )}>
                    Data deschidere apel:{" "}
                    {data.start_date ? formatUnixDate(data.start_date, DATE_FORMATS.LONG) : "-"}
                </li>
                <li className="ml-[24px] text-red-600">
                    Dată limită depunere:{" "}
                    {data.end_date ? formatUnixDate(data.end_date, DATE_FORMATS.LONG) : "-"}
                </li>
            </ul>
        </div>
    );
};

export default FinancingAvailability;
