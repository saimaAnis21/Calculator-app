import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  return (
    <button type="submit" onClick={handleClick.bind(this, name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.isRequired,
};

export default Button;
