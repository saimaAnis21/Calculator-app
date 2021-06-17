import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button type="submit">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
