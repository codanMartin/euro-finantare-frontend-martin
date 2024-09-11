import PropTypes from "prop-types";

const ConMessage = ({message}) => {

    return (
        <div className="flex">
            <span className="p-2 rounded-r-xl rounded-b-xl text-white bg-gray-500 shadow">
               {message}
            </span>
        </div>
    )
}
ConMessage.propTypes = {
    message: PropTypes.string.isRequired
}
export default ConMessage