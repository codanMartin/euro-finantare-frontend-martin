import {FaLandmark, FaSackDollar} from "react-icons/fa6";
import {MAP_LOCATIONS_NAME} from "@/utils/enums";

export const dynamic = 'force-dynamic';

function formatContribution(contributions) {
    const locations = Object.keys(contributions);
    const firstContribution = contributions[locations[0]];
    const allSameFrom = locations.every(loc => contributions[loc].from === firstContribution.from);
    const allSameTo = locations.every(loc => contributions[loc].to === firstContribution.to);

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

    return locations.map((loc, index) => {
        const { from, to } = contributions[loc];
        let contributionString;
        if (to === from) {
            contributionString = `${to} %`;
        } else {
            contributionString = to === null ? `minimum ${from} %` : `${from} - ${to} %`;
        }
        return `${MAP_LOCATIONS_NAME[loc]}: ${contributionString}`;
    }).join(', ');
}

const IntroSection = ({data}) => {

    return (
        <div className="flex flex-col sm:flex-row justify-center w-full border-x border-b border-gray-200 shadow-b-sm">
            <div className="w-full flex-1 flex flex-col p-8 lg:p-16 space-y-4 lg:space-y-8 border-b sm:border-r sm:border-b-0 border-gray-200 shadow-b-sm sm:shadow-r-sm sm:shadow-b-0">
                <span className="text-2xl font-bold">{data["name"]}</span>
                <div className="flex flex-col">
                    <span>{data["program"]["name"]}</span>
                    <span>Tip Finantare: {data["program"]["type"]["title"]}</span>
                </div>
            </div>
            <div className="w-full flex flex-col p-8 lg:p-16 flex-1 space-y-4">
                <div>
                    <span className="text-lg font-bold">Buget total alocat:&nbsp;</span>
                    <span>{data["total_budget"]} {data["budget_currency"]}</span>
                </div>
                <div className={"flex space-x-4"}>
                    <div className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] flex items-center justify-center rounded-full border-[4px] border-sky-600 bg-sky-100">
                        <FaLandmark className="text-lg text-sky-600"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Bugetul unui proiect:</span>
                        <span>{data["min_budget"] === 0 ? `max ${data["max_budget"]}` : `${data["min_budget"]} - ${data["max_budget"]}`} {data["budget_currency"]}</span>
                    </div>
                </div>
                <div className={"flex space-x-4"}>
                    <div className="min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] flex items-center justify-center rounded-full border-[4px] border-violet-600 bg-violet-100">
                        <FaSackDollar className="text-lg text-violet-600"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Contribuție proprie:</span>
                        <span>{formatContribution(data["contribution"])}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection