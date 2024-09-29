import PropTypes from "prop-types";

const ConMessage = ({ message }) => {
    return (
        <div className="flex">
            <span className="rounded-b-xl rounded-r-xl bg-gray-500 p-2 text-white shadow">
                {message}
            </span>
        </div>
    );
};
ConMessage.propTypes = {
    message: PropTypes.string.isRequired,
};
export default ConMessage;
