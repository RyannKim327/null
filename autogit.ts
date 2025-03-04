function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryNumber}`); // Output: The binary representation of 42 is 101010
