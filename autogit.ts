function decimalToBinary(decimalNumber: number): string {
    return decimalNumber.toString(2);
}

// Example usage:
const decimalNumber: number = 42;
const binaryString: string = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryString}`);
The binary representation of 42 is 101010
function decimalToBinaryWithNegative(decimalNumber: number): string {
    if (decimalNumber < 0) {
        return '-' + decimalToBinaryWithNegative(-decimalNumber);
    }
    return decimalNumber.toString(2);
}

// Example usage:
console.log(decimalToBinaryWithNegative(-42)); // Output: -101010
