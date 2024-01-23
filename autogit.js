function decimalToBinary(decimal) {
  return parseInt(decimal, 10).toString(2);
}
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber);
