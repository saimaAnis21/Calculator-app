import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '+':
    case '-':
    case 'X':
    case '/':
      operation = buttonName;
      break;
    case '=':
      operation = buttonName;
      next = '';
      break;
    case '%':
      operation = buttonName;
      total = operate(total, '0', operation);
      break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
      if (total === '0') {
        total = buttonName;
      } else if (operation === '+' || operation === '-' || operation === 'X' || operation === '/') {
        next = buttonName;
        total = operate(total, next, operation);
      } else {
        total += buttonName;
      }
      break;
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      break;
    default:
      total = 0;
  }

  return { total, next, operation };
}

export default calculate;
