import PropTypes from "prop-types";

const ProMessage = ({ message }) => {
    return (
        <div className="flex">
            <span className="rounded-b-xl rounded-r-xl bg-eu-blue/70 p-2 text-white shadow shadow-eu-blue">
                {message}
            </span>
        </div>
    );
};
ProMessage.propTypes = {
    message: PropTypes.string.isRequired,
};
export default ProMessage;
