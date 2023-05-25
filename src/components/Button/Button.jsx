import PropTypes from 'prop-types';

function Button({ text, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;

Button.propType = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
