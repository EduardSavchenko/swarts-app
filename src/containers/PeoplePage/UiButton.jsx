import PropTypes from "prop-types";
import cn from "classnames";

const UiButton = ({ text, onClick, disabled, theme = "dark" }) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn("navbutton", theme)}
      >
        {text}
      </button>
    </>
  );
};

UiButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export { UiButton };
