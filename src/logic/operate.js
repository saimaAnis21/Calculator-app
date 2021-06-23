import Big from 'big.js';

function operate(numberone, numbertwo, operation) {
  const nmbrOne = new Big(numberone);
  const nmbrTwo = new Big(numbertwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = parseInt(nmbrOne, 10) + parseInt(nmbrTwo, 10);
      break;
    case '-':
      result = nmbrTwo - nmbrOne;
      break;
    case 'X':
      result = nmbrOne * nmbrTwo;
      break;
    case '%':
      result = nmbrOne / 100;
      break;
    case '/':
      result = nmbrTwo === 0 ? 'undefined' : nmbrTwo / nmbrOne;
      break;
    default:
      result = 0;
  }
  return result.toString();
}

export default operate;
