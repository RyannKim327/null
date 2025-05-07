function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = 42; // Change this to the decimal number you want to convert
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`); // Output: 101010
The binary representation of 42 is 101010
