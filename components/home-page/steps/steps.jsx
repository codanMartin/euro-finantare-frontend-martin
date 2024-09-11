"use client"

import StepsDescription from "@/components/home-page/steps/steps-description";
import StepContainer from "@/components/home-page/steps/step-container";
import StepsNav from "@/components/home-page/steps/steps-nav";
import placeholder from "@/public/placeholder.jpg"
import {useEffect, useRef, useState} from "react";

const Steps = () => {
    const [mostVisibleContainer, setMostVisibleContainer] = useState(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const elements = [
            document.getElementById("steps-container-item-1"),
            document.getElementById("steps-container-item-2"),
            document.getElementById("steps-container-item-3"),
            document.getElementById("steps-container-item-4"),
        ];

        const visibilityMap = {};

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                const {target, intersectionRatio} = entry;
                visibilityMap[target.id] = intersectionRatio;
            });

            const mostVisibleElement = Object.keys(visibilityMap).reduce((a, b) =>
                visibilityMap[a] > visibilityMap[b] ? a : b
            );

            if (visibilityMap[mostVisibleElement] === 0) {
                setMostVisibleContainer(null);
            } else setMostVisibleContainer(mostVisibleElement);
        };

        observerRef.current = new IntersectionObserver(observerCallback, {
            threshold: Array.from({length: 101}, (_, i) => i / 100),
        });

        elements.forEach((element) => {
            if (element) observerRef.current.observe(element);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);
    return (
        <div className="relative flex flex-col flex-1 w-full border-b border-gray-300 shadow">
            <StepsDescription/>
            <StepsNav mostVisibleContainer={mostVisibleContainer}/>
            <div className={"flex flex-1 flex-col py-8 pb-8"}>
                <StepContainer stepId={"steps-container-item-1"} stepTitle={"1. Lorem ipsum dolor"}
                               imageSrc={placeholder}
                               stepParagraphs={["Proin aliquam laoreet urna, nec ornare risus pretium at. Phasellus aliquam, nunc posuere accumsan cursus, dui ante pretium neque", "Morbi magna dui, volutpat sit amet euismod eu, blandit a arcu. Sed molestie ornare mi sit amet vulputate. Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. Nullam semper ut augue id fermentum. Maecenas dapibus ullamcorper elit, vel placerat orci facilisis tincidunt. Donec eget libero vel ipsum varius mattis.", "Curabitur euismod sollicitudin imperdiet. Nulla facilisi. Vestibulum laoreet ac arcu at vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."]}/>
                <StepContainer stepId={"steps-container-item-2"} stepTitle={"2. Maecenas tempor"} imageSrc={placeholder}
                               stepParagraphs={["Proin aliquam laoreet urna, nec ornare risus pretium at. Phasellus aliquam, nunc posuere accumsan cursus, dui ante pretium neque", "Morbi magna dui, volutpat sit amet euismod eu, blandit a arcu. Sed molestie ornare mi sit amet vulputate. Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. Nullam semper ut augue id fermentum. Maecenas dapibus ullamcorper elit, vel placerat orci facilisis tincidunt. Donec eget libero vel ipsum varius mattis.", "Curabitur euismod sollicitudin imperdiet. Nulla facilisi. Vestibulum laoreet ac arcu at vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."]}/>
                <StepContainer stepId={"steps-container-item-3"} stepTitle={"3. Nullam semper ut"}
                               imageSrc={placeholder} withCta={true} ctaAction={() => false}
                               ctaText={"Morbi magna dui"}
                               stepParagraphs={["Proin aliquam laoreet urna, nec ornare risus pretium at. Phasellus aliquam, nunc posuere accumsan cursus, dui ante pretium neque", "Morbi magna dui, volutpat sit amet euismod eu, blandit a arcu. Sed molestie ornare mi sit amet vulputate. Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. Nullam semper ut augue id fermentum. Maecenas dapibus ullamcorper elit, vel placerat orci facilisis tincidunt. Donec eget libero vel ipsum varius mattis.", "Curabitur euismod sollicitudin imperdiet. Nulla facilisi. Vestibulum laoreet ac arcu at vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."]}/>
                <StepContainer stepId={"steps-container-item-4"} stepTitle={"4. In vehicula fermentum"}
                               imageSrc={placeholder}
                               stepParagraphs={["Proin aliquam laoreet urna, nec ornare risus pretium at. Phasellus aliquam, nunc posuere accumsan cursus, dui ante pretium neque", "Morbi magna dui, volutpat sit amet euismod eu, blandit a arcu. Sed molestie ornare mi sit amet vulputate. Nam fringilla magna elit, sit amet eleifend metus aliquam at. Vivamus placerat ipsum vel elit commodo, id congue ipsum semper. Nullam semper ut augue id fermentum. Maecenas dapibus ullamcorper elit, vel placerat orci facilisis tincidunt. Donec eget libero vel ipsum varius mattis.", "Curabitur euismod sollicitudin imperdiet. Nulla facilisi. Vestibulum laoreet ac arcu at vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."]}/>
            </div>
        </div>
    )
}
export default Steps