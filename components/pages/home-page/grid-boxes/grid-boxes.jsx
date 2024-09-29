const GridBoxes = () => {
    return (
        <div className="relative flex w-full flex-1 justify-center border-b border-gray-300 shadow">
            <div className="grid w-full grid-cols-2 md:grid-cols-3">
                <div className="psace-x-2 col-span-2 flex flex-col border-b border-gray-300 p-4 px-8 sm:col-span-1 sm:border-0">
                    <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                    <span className="text-">
                        Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus
                        placerat ipsum vel elit commodo, id congue ipsum semper.{" "}
                    </span>
                </div>
                <div className="psace-x-2 col-span-2 flex flex-col border-gray-300 p-4 px-8 sm:col-span-1 md:border-x">
                    <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                    <span className="text-">
                        Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus
                        placerat ipsum vel elit commodo, id congue ipsum semper.{" "}
                    </span>
                </div>
                <div className="psace-x-2 col-span-2 flex flex-col border-t border-gray-300 p-4 px-8 md:col-span-1">
                    <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                    <span className="text-">
                        Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus
                        placerat ipsum vel elit commodo, id congue ipsum semper.{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default GridBoxes;
