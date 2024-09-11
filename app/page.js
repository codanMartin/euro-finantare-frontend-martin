"use client"

import ProCons from "@/components/home-page/pro-cons/pro-cons";
import Banner from "@/components/home-page/banner/banner";
import Steps from "@/components/home-page/steps/steps";
import PropTypes from "prop-types";

const Home = ({auth}) => {
    return (
        <div className="flex flex-1 h-full w-full flex-col gap 16">
            <Banner/>
            <Steps/>
            <div className="relative flex flex-1 w-full justify-center border-b border-gray-300 shadow">
                <div className="grid grid-cols-2 md:grid-cols-3 w-full">
                    <div className="col-span-2 sm:col-span-1 flex flex-col psace-x-2 border-b sm:border-0 border-gray-300 p-4 px-8">
                        <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                        <span className="text-">Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex flex-col psace-x-2 md:border-x border-gray-300 p-4 px-8">
                        <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                        <span className="text-">Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. </span>
                    </div>
                    <div className="col-span-2 border-t  md:col-span-1 flex flex-col psace-x-2 border-gray-300 p-4 px-8">
                        <span className="text-lg font-bold">Proin aliquam laoreet urna</span>
                        <span className="text-">Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. </span>
                    </div>
                </div>
            </div>
            <ProCons/>
        </div>
    );
}
Home.propTypes = {auth: PropTypes.object}
export default Home
// export default useProtectedRoute(Home, [])
