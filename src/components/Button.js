import PropTypes from 'prop-types';
import './styles.css';

function Button(props) {
  const { name } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  const getClassName = (operator) => {
    if (operator === '=' || operator === '+' || operator === '-' || operator === 'X' || operator === '/') {
      return 'orng-btns w-25p h-100p brdr';
    } if (operator === '0') {
      return 'bg-btnpanel w-50p h-100p brdr';
    }
    return 'bg-btnpanel w-25p h-100p brdr';
  };

  return (
    <button type="submit" onClick={handleClick.bind(this, name)} className={getClassName(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.isRequired,
};

export default Button;
