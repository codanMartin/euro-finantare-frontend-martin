import { FaFacebook, FaLandmark, FaLinkedin, FaSackDollar, FaXTwitter } from "react-icons/fa6";
import { useDomainReceiver } from "@/hooks/use-domain-receiver";
import { MAP_LOCATIONS_NAME } from "@/utils/enums";

function formatContribution(contributions) {
    const locations = Object.keys(contributions);
    const firstContribution = contributions[locations[0]];
    const allSameFrom = locations.every(
        (loc) => contributions[loc].from === firstContribution.from,
    );
    const allSameTo = locations.every((loc) => contributions[loc].to === firstContribution.to);

    if (locations.length === 1) {
        const { from, to } = firstContribution;
        if (to === from) {
            return `${to} %`;
        }
        return to === null ? `minimum ${from} %` : `${from} - ${to} %`;
    }

    if (allSameFrom && allSameTo) {
        const { from, to } = firstContribution;
        if (to === from) {
            return `${to} %`;
        }
        return to === null ? `minimum ${from} %` : `${from} - ${to} %`;
    }

    return locations
        .map((loc, index) => {
            const { from, to } = contributions[loc];
            let contributionString;
            if (to === from) {
                contributionString = `${to} %`;
            } else {
                contributionString = to === null ? `minimum ${from} %` : `${from} - ${to} %`;
            }
            return `${MAP_LOCATIONS_NAME[loc]}: ${contributionString}`;
        })
        .join(", ");
}

const IntroSection = ({ data }) => {
    const { fullUrl } = useDomainReceiver();

    return (
        <div className="flex w-full flex-col justify-center border-x border-b border-gray-200 shadow-b-sm sm:flex-row">
            <div className="sm:shadow-b-0 flex w-full flex-1 flex-col space-y-4 border-b border-gray-200 p-8 shadow-b-sm sm:border-b-0 sm:border-r sm:shadow-r-sm lg:space-y-8 lg:p-16">
                <span className="text-2xl font-bold">{data["name"]}</span>
                <div className="flex flex-col">
                    <h1>{data["program"]["name"]}</h1>
                    <span>Tip Finantare: {data["program"]["type"]["title"]}</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span>Distribuie:</span>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                        className="group">
                        <FaFacebook className={"text-2xl duration-300 group-hover:text-eu-blue"} />
                    </a>
                    <a
                        href={`https://twitter.com/share?url=${fullUrl}&text=Euro Finantare: ${data["name"]}`}
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                        className="group">
                        <FaXTwitter className={"text-2xl duration-300 group-hover:text-eu-blue"} />
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}`}
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                        className="group">
                        <FaLinkedin className={"text-2xl duration-300 group-hover:text-eu-blue"} />
                    </a>
                </div>
            </div>
            <div className="flex w-full flex-1 flex-col space-y-4 p-8 lg:p-16">
                <div>
                    <span className="text-lg font-bold">Buget total alocat:&nbsp;</span>
                    <span>
                        {data["total_budget"]} {data["budget_currency"]}
                    </span>
                </div>
                <div className={"flex space-x-4"}>
                    <div className="flex max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] items-center justify-center rounded-full border-[4px] border-sky-600 bg-sky-100">
                        <FaLandmark className="text-lg text-sky-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Bugetul unui proiect:</span>
                        <span>
                            {data["min_budget"] === 0
                                ? `max ${data["max_budget"]}`
                                : `${data["min_budget"]} - ${data["max_budget"]}`}{" "}
                            {data["budget_currency"]}
                        </span>
                    </div>
                </div>
                <div className={"flex space-x-4"}>
                    <div className="flex max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] items-center justify-center rounded-full border-[4px] border-violet-600 bg-violet-100">
                        <FaSackDollar className="text-lg text-violet-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Contribuție proprie:</span>
                        <span>{formatContribution(data["contribution"])}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
