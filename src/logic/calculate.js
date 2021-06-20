import operate from './operate';

function calculate(calculator) {
  let { total, next, operation } = calculator;

  if (operation === '+/-') {
    total *= -1;
    next *= -1;
  } else if (operation === '+' || operation === '-' || operation === 'X' || operation === '%') {
    total = operate(total, next, operation);
  } else if (operation === 'AC') {
    total = '';
    next = '';
    operation = '';
  }

  return { total, next, operation };
}

export default calculate;
