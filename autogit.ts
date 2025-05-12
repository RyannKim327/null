const decimalNumber = 42;
const binaryString = decimalNumber.toString(2);
console.log(binaryString); // Output: "101010"
const decimalNumber = 42;
const binaryString = decimalNumber.toString(2).padStart(8, '0');
console.log(binaryString); // Output: "00101010"
