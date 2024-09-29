import BLANK_MAP from "@/public/blank-map.png";
import {MAP_IMAGES} from "@/utils/enums";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const FinancingMap = ({title, regions}) => {


    return (
        <div
            className="flex p-8 xl:px-16 flex-col space-y-4 lg:space-y-8 w-full border-b shadow-b-sm border-gray-200">
            <span className="text-2xl font-bold">{title}</span>
            <div className="relative flex pointer-events-none select-none">
                <Image src={BLANK_MAP} alt="Harta Goala" className="w-auto h-auto pointer-events-none select-none"/>
                {Object.keys(regions).length > 0 && Object.keys(regions).map((region, regionIdx) => {
                    console.log(region)
                        return (
                            <div key={regionIdx} className="absolute w-full h-full">
                                <Image src={MAP_IMAGES[region]} alt={regions[region]} className="w-auto h-auto pointer-events-none select-none"/>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default FinancingMap