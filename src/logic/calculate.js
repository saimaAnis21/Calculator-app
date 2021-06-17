import operate from './operate';

function calculate(calculator, buttonName) {
  let total = 0;
  let next = 0;
  if (buttonName === '+/-') {
    total = calculator.total * -1;
    next = calculator.next * -1;
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'X' || buttonName === '%') {
    operate(total, next, buttonName);
  }
}

export default calculate;
