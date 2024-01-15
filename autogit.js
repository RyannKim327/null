function decimalToBinary(decimal) {
  return decimal.toString(2);
}

// Example usage
console.log(decimalToBinary(10));      // Output: "1010"
console.log(decimalToBinary(255));     // Output: "11111111"
console.log(decimalToBinary(1000));    // Output: "1111101000"
let binary = decimalToBinary(10);
let numericValue = parseInt(binary, 2);
console.log(numericValue);             // Output: 10
