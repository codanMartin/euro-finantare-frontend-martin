import PropTypes from "prop-types";

const ProMessage = ({message}) => {

    return (
        <div className="flex">
            <span className="p-2 rounded-r-xl rounded-b-xl text-white bg-eu-blue/70 shadow shadow-eu-blue">
               {message}
            </span>
        </div>
    )
}
ProMessage.propTypes = {
    message: PropTypes.string.isRequired
}
export default ProMessage