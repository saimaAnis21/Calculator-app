import Big from 'big.js';

function operate(numberone, numbertwo, operation) {
  const nmbrOne = new Big(numberone);
  const nmbrTwo = new Big(numbertwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = nmbrOne + nmbrTwo;
      break;
    case '-':
      result = nmbrOne - nmbrTwo;
      break;
    case 'X':
      result = nmbrOne * nmbrTwo;
      break;
    case '%':
      result = nmbrOne / 100;
      break;
    case '&#247;':
      result = nmbrOne / nmbrTwo;
      break;
    default:
      result = 0;
  }
  return result;
}

export default operate;
