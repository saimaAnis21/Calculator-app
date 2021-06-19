import operate from './operate';

function calculate(calculator) {
  let { total, next } = calculator;
  const { operation } = calculator;
  if (operation === '+/-') {
    total *= -1;
    next *= -1;
  } else if (operation === '+' || operation === '-' || operation === 'X' || operation === '%') {
    total = operate(total, next, operation);
  } else if (operation === 'AC') {
    total = '';
  }

  return total;
}

export default calculate;
