import PropTypes from "prop-types";

const Button = ({ type = "button", action, disabled, text }) => {
    return (
        <div className="group flex w-min">
            <button
                type={type}
                disabled={disabled}
                onClick={() => action()}
                className="shadow-x-2 shadow-y-5 mt-3 flex h-[63.2px] w-min items-center bg-eu-blue px-[21px] text-base tracking-normal text-white shadow-lg sm:text-lg">
                <span className="text-nowrap font-normal group-hover:underline sm:font-bold">
                    {text}
                </span>
            </button>
        </div>
    );
};

Button.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default Button;
