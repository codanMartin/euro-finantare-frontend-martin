import { Fragment } from "react";

const StepsDescription = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 hidden border-b border-gray-300 md:flex" />
            <div className="col-span-2 flex flex-col border-b border-gray-300 px-8 py-16 text-lg md:px-4">
                <span>Maecenas facilisis leo eu varius commodo.</span>
                <span>Donec eget arcu non neque faucibus imperdiet sed sit amet urna.</span>
                <span>Proin ut lorem elementum, congue eros et, luctus nisi.</span>
            </div>
            <div className="col-span-1 hidden border-b border-gray-300 md:flex" />
        </div>
    );
};
export default StepsDescription;
