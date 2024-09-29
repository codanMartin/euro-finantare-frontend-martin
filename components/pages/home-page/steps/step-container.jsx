import Button from "@/components/layout/button";
import PropTypes from "prop-types";
import Image from "next/image";

const StepContainer = ({
    stepId,
    stepTitle,
    stepParagraphs,
    imageSrc,
    ctaAction,
    ctaDisabled,
    ctaText,
    withCta = false,
}) => {
    return (
        <div id={stepId} className="grid grid-cols-1 gap-8 px-8 py-8 md:grid-cols-4 md:px-4">
            <div className="col-span-1 flex flex-1">
                <span className="w-full text-2xl font-bold md:text-end">{stepTitle}</span>
            </div>
            <div className="col-span-1 flex flex-col space-y-8 md:col-span-2">
                <Image src={imageSrc} alt="" />
                {stepParagraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                ))}
            </div>
            <div className="col-span-1 flex flex-col items-start justify-end">
                {withCta && (
                    <Button action={() => ctaAction()} text={ctaText} disabled={ctaDisabled} />
                )}
            </div>
        </div>
    );
};
StepContainer.propTypes = {
    withCta: PropTypes.bool,
    ctaText: PropTypes.string,
    ctaAction: PropTypes.func,
    ctaDisabled: PropTypes.bool,
    stepId: PropTypes.string.isRequired,
    stepTitle: PropTypes.string.isRequired,
    stepParagraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
export default StepContainer;
