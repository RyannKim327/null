const decimalNumber = 12;
const binaryNumber = decimalNumber.toString(2);
console.log(binaryNumber); // Output: "1100"
const decimalNumber = 12;
const binaryNumber = (decimalNumber as number).toString(2);
console.log(binaryNumber); // Output: "1100"
const decimalNumber = 12;
const binaryNumber = decimalNumber.toString(2).padStart(8, '0');
console.log(binaryNumber); // Output: "00001100"
