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
            <ProCons/>
        </div>
    );
}
Home.propTypes = {auth: PropTypes.object}
export default Home
// export default useProtectedRoute(Home, [])
