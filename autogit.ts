const decimalNumber: number = 42;
const binaryString: string = decimalNumber.toString(2);
console.log(binaryString); // Output: "101010"
function decimalToBinary(decimal: number): string {
  return decimal.toString(2);
}

console.log(decimalToBinary(10));  // Output: "1010"
console.log(decimalToBinary(255)); // Output: "11111111"
