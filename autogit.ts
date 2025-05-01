function decimalToBinary(decimal: number): string {
  return decimal.toString(2);
}

// Usage:
const num = 42;
const binary = decimalToBinary(num);
console.log(binary);  // Output: "101010"
