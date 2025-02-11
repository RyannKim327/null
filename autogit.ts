function decimalToBinary(decimal: number): string {
    // Use toString method with radix 2
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = 42;
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`); // Output: The binary representation of 42 is 101010
