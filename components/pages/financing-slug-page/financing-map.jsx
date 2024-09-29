import BLANK_MAP from "@/public/blank-map.png";
import { MAP_IMAGES } from "@/utils/enums";
import Image from "next/image";

export const dynamic = "force-dynamic";

const FinancingMap = ({ title, regions }) => {
    return (
        <div className="flex w-full flex-col space-y-4 border-b border-gray-200 p-8 shadow-b-sm lg:space-y-8 xl:px-16">
            <span className="text-2xl font-bold">{title}</span>
            <div className="pointer-events-none relative flex select-none">
                <Image
                    src={BLANK_MAP}
                    alt="Harta Goala"
                    className="pointer-events-none h-auto w-auto select-none"
                />
                {Object.keys(regions).length > 0 &&
                    Object.keys(regions).map((region, regionIdx) => {
                        console.log(region);
                        return (
                            <div key={regionIdx} className="absolute h-full w-full">
                                <Image
                                    src={MAP_IMAGES[region]}
                                    alt={regions[region]}
                                    className="pointer-events-none h-auto w-auto select-none"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default FinancingMap;
