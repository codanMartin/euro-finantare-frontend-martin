"use client"

import GridBoxes from "@/components/pages/home-page/grid-boxes/grid-boxes";
import ProCons from "@/components/pages/home-page/pro-cons/pro-cons";
import Banner from "@/components/pages/home-page/banner/banner";
import Steps from "@/components/pages/home-page/steps/steps";
import PropTypes from "prop-types";

const Home = ({auth}) => {
    return (
        <div className="flex flex-1 h-full w-full flex-col">
            <Banner/>
            <Steps/>
            <GridBoxes/>
            <ProCons/>
        </div>
    );
}
Home.propTypes = {auth: PropTypes.object}
export default Home
