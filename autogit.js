function decimalToBinary(decimal) {
  return decimal.toString(2);
}

// Example usage
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(23)); // Output: 10111
console.log(decimalToBinary(57)); // Output: 111001
const binaryString = decimalToBinary(10); // "1010"
const binaryNumber = parseInt(binaryString, 2);
console.log(binaryNumber); // Output: 10
