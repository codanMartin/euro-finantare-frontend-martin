"use client"

import useMobileViewPort from "@/hooks/use-mobile-viewport";
import {FaCaretDown} from "react-icons/fa6";
import PropTypes from "prop-types";
import {cn} from "@/utils/utils";
import {useMemo} from "react";

const StepsNav = ({mostVisibleContainer}) => {

    return (
        <div id="steps-nav"
             className="md:sticky md:top-[63.2px] bg-white border-b border-gray-300 flex justify-center shadow">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full md:w-auto">
                <StepNavItem id={"steps-nav-item-1"} bulletNumber={"1."} bulletText={"Lorem ipsum dolor"}
                             mostVisibleContainer={mostVisibleContainer}/>
                <StepNavItem id={"steps-nav-item-2"} bulletNumber={"2."} bulletText={"Maecenas tempor"}
                             mostVisibleContainer={mostVisibleContainer}/>
                <StepNavItem id={"steps-nav-item-3"} bulletNumber={"3."} bulletText={"Nullam semper ut"}
                             mostVisibleContainer={mostVisibleContainer}/>
                <StepNavItem id={"steps-nav-item-4"} bulletNumber={"4."} bulletText={"In vehicula fermentum"}
                             mostVisibleContainer={mostVisibleContainer} isLast={true}/>
            </div>
        </div>
    )
}
StepsNav.propTypes = {
    mostVisibleContainer: PropTypes.string,
}
export default StepsNav

const StepNavItem = ({id, bulletNumber, bulletText, mostVisibleContainer, isLast = false}) => {
    const {isMobileViewPort} = useMobileViewPort()

    const isSelected = useMemo(() => {
        if (!mostVisibleContainer || !id) return false;
        const mostVisibleId = mostVisibleContainer.split("-").pop();
        const currentId = id.split("-").pop();
        return mostVisibleId === currentId;
    }, [mostVisibleContainer, id]);

    const handleClick = () => {
        const targetId = `steps-container-item-${id.split("-").pop()}`;
        const targetElement = document.getElementById(targetId);
        const nav = document.getElementById("steps-nav")
        if (targetElement) {
            const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementTop - (!isMobileViewPort ? 2 * nav.offsetHeight : nav.offsetHeight / 2),
                behavior: 'smooth'
            });
        }
    };


    return (
        <button id={id} onClick={() => handleClick()}
                className={cn(isSelected ? "bg-eu-blue text-white" : "", isLast ? "md:border-x" : "border-b md:border-b-0 md:border-l", "flex focus:outline-none px-8 py-4 space-x-4 md:justify-center items-end border-gray-300 transition-colors duration-300")}>
            <span className="text-2xl font-bold">{bulletNumber}</span>
            <span className="text-sm pb-1">{bulletText}</span>
            <div className="md:hidden flex flex-1 h-full items-center justify-end">
                <FaCaretDown/>
            </div>
        </button>
    )
}
StepNavItem.propTypes = {
    bulletNumber: PropTypes.string.isRequired,
    bulletText: PropTypes.string.isRequired,
    mostVisibleContainer: PropTypes.string,
    id: PropTypes.string.isRequired,
    isLast: PropTypes.bool
}