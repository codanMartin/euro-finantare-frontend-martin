import { PROJECT_STATUS, PROJECT_STATUS_DISPLAY } from "@/utils/enums";
import { cn, formatUnixDate, getUnixTimestamp } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const CardV1 = ({ availableFinancing }) => {
    const dateNowInUnix = getUnixTimestamp(new Date());

    return (
        <div className="group flex h-min w-full flex-col border border-gray-200 duration-300 hover:scale-[1.01] hover:border-white hover:shadow-all-3xl">
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
                <div className="flex w-full flex-col items-start space-y-4 py-2 xl:flex-row xl:justify-between xl:space-y-0">
                    <div className="flex flex-col">
                        <div className="flex flex-nowrap items-end">
                            <span className="text-nowrap font-semibold text-black">
                                Buget total:&nbsp;
                            </span>
                            <span className="text-nowrap text-gray-400">
                                {availableFinancing["total_budget"]}{" "}
                                {availableFinancing["budget_currency"]}
                            </span>
                        </div>
                        <div className="flex flex-nowrap items-end">
                            <span className="text-nowrap font-semibold text-black">
                                Valoare proiect:&nbsp;
                            </span>
                            <span className="text-nowrap text-gray-400">
                                {availableFinancing["min_budget"] === 0
                                    ? `max ${availableFinancing["max_budget"]}`
                                    : `${availableFinancing["min_budget"]} - ${availableFinancing["max_budget"]}`}{" "}
                                {availableFinancing["budget_currency"]}
                            </span>
                        </div>
                        <div className="flex flex-nowrap items-end">
                            <span className="text-nowrap font-semibold text-black">
                                Regiuni:&nbsp;
                            </span>
                            <span className="text-nowrap text-gray-400">
                                {Object.keys(availableFinancing["supported_regions"]).length !== 8
                                    ? Object.values(availableFinancing["supported_regions"]).map(
                                          (value, idx) =>
                                              `${value}${idx + 1 < Object.keys(availableFinancing["supported_regions"]).length ? ", " : ""}`,
                                      )
                                    : "Nivel National"}
                            </span>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div
                            className={cn(
                                availableFinancing["status"] === PROJECT_STATUS.OPENED &&
                                    "bg-green-600",
                                availableFinancing["status"] === PROJECT_STATUS.CLOSED &&
                                    "bg-red-600",
                                availableFinancing["status"] === PROJECT_STATUS.PENDING &&
                                    "bg-orange-400",
                                "h-min px-2 py-1 text-white",
                            )}>
                            <span className="text-nowrap">
                                {PROJECT_STATUS_DISPLAY[availableFinancing["status"]]}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col pt-2 text-sm xl:flex-row xl:justify-between">
                    <div className="flex w-min flex-nowrap space-x-2">
                        <span className="text-nowrap">Dată deschidere apel:</span>
                        <span
                            className={cn(
                                "text-nowrap font-semibold",
                                availableFinancing["end_date"]
                                    ? availableFinancing["end_date"] < dateNowInUnix
                                        ? "text-red-600"
                                        : "text-green-600"
                                    : "text-green-600",
                            )}>
                            {availableFinancing["start_date"]
                                ? formatUnixDate(availableFinancing["start_date"])
                                : "-"}
                        </span>
                    </div>
                    <div className="flex w-min flex-nowrap space-x-2">
                        <span className="text-nowrap">Dată limită depunere:</span>
                        <span className="text-nowrap font-semibold text-red-600">
                            {availableFinancing["end_date"]
                                ? formatUnixDate(availableFinancing["end_date"])
                                : "-"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardV1;
