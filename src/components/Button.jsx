import PropTypes from 'prop-types';
import "../styles/Button.scss"

const Button = ({ label, handleClick, isDisabled }) => {
  return(
    <button 
      className={isDisabled == true? "btn_disabled": ""}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  isDisabled: false,
};

export default Button;