function decimalToBinary(decimalNumber: number): string {
    return decimalNumber.toString(2);
}

// Example usage
const decimalNum = 42;
const binaryString = decimalToBinary(decimalNum);
console.log(`The binary representation of ${decimalNum} is ${binaryString}`);
