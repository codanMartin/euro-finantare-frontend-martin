import Button from "@/components/layout/button";
import PropTypes from "prop-types";
import Image from "next/image";

const StepContainer = ({stepId, stepTitle, stepParagraphs, imageSrc, ctaAction, ctaDisabled, ctaText, withCta = false}) => {

    return (
        <div id={stepId} className="grid gap-8 grid-cols-1 md:grid-cols-4 px-8 md:px-4 py-8">
            <div className="flex flex-1 col-span-1">
                <span className="w-full md:text-end text-2xl font-bold">
                    {stepTitle}
                </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col space-y-8">
                <Image src={imageSrc} alt=""/>
                {stepParagraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                ))}
            </div>
            <div className="flex col-span-1 flex-col justify-end items-start">
                {withCta && (
                    <Button action={() => ctaAction()} text={ctaText} disabled={ctaDisabled}/>
                )}
            </div>
        </div>
    )
}
StepContainer.propTypes = {
    withCta: PropTypes.bool,
    ctaText: PropTypes.string,
    ctaAction: PropTypes.func,
    ctaDisabled: PropTypes.bool,
    stepId: PropTypes.string.isRequired,
    stepTitle: PropTypes.string.isRequired,
    stepParagraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}
export default StepContainer