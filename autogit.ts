function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = 10;
const binaryString = decimalToBinary(decimalNumber);
console.log(binaryString);  // Output: "1010"
