const decimalNumber = 42;
const binaryString = decimalNumber.toString(2);
console.log(binaryString); // Output: "101010"
function decimalToBinary(num: number): string {
  return num.toString(2);
}

// Usage
console.log(decimalToBinary(255)); // "11111111"
