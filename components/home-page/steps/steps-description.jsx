import {Fragment} from "react";

const StepsDescription = () => {

    return(
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="hidden md:flex col-span-1 border-b border-gray-300"/>
            <div className="col-span-2 text-lg flex flex-col px-8 md:px-4 py-16 border-b border-gray-300">
                <span>Maecenas facilisis leo eu varius commodo.</span>
                <span>Donec eget arcu non neque faucibus imperdiet sed sit amet urna.</span>
                <span>Proin ut lorem elementum, congue eros et, luctus nisi.</span>
            </div>
            <div className="hidden md:flex col-span-1 border-b border-gray-300"/>
        </div>
    )
}
export default StepsDescription