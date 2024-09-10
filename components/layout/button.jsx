import PropTypes from "prop-types";

const Button = ({action, disabled, text}) => {

    return (
        <button disabled={disabled} onClick={() => action()}
                className="group tracking-normal mt-3 px-[21px] h-[63.2px] flex items-center bg-eu-blue w-min text-base text-white sm:text-lg shadow-lg shadow-x-2 shadow-y-5">
            <span className="text-nowrap group-hover:underline font-normal sm:font-bold">{text}</span>
        </button>
    )
}
Button.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}
export default Button