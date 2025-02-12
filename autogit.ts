function decimalToBinary(decimal: number): string {
    if (decimal < 0) {
        throw new Error("Negative numbers are not supported.");
    }
    return decimal.toString(2);
}

// Example usage
const decimalNumber = 10;
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`); // Outputs: 1010
