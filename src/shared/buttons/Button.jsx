import classes from "./button.module.scss";
import PropTypes from "prop-types";
const Button = ({ children, isDisabled, type, version, onClick,className }) => {
  const CLASSES = `${classes.btn} ${version ? version : ""} ${className}`;

  return (
    <button
      className={CLASSES}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      
    >
      {children}
    </button>
  );
};
export default Button;
Button.defaultProps = {
  isDisabled: false,
  type: "button",
  version: "primary",
  onClick: () => {},
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  version: PropTypes.string.isRequired,
};
