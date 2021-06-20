import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'X' || buttonName === '%') {
    total = operate(total, next, operation);
  } else if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  }

  return { total, next, operation };
}

export default calculate;
