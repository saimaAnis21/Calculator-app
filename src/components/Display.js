import PropTypes from 'prop-types';
import './styles.css';

function Display(props) {
  const { result } = props;
  return (
    <div className="display-panel h-100 w-100p d-flex jc-flexend ai-center ">
      <span className="pr-10">{result}</span>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
