function decimalToBinary(decimal: number): string {
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = 42;
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`);
function decimalToBinary(decimal: number): string {
    if (decimal < 0) {
        return '-' + decimalToBinary(-decimal); // Handling negative numbers
    }
    return decimal.toString(2);
}

// Example usage:
const decimalNumber = -42;
const binaryString = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`);
