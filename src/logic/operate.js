import Big from 'big.js';

function operate(numberone, numbertwo, operation) {
  const nmbrOne = new Big(numberone);
  const nmbrTwo = new Big(numbertwo);
  let result = 0;

  if (operation === '+') {
    result = nmbrOne + nmbrTwo;
  }
  return result;
}

export default operate;
