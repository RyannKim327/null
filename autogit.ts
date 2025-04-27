function decimalToBinary(decimalNumber: number): string {
    // Check if the input is a valid number
    if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    // Convert the number to binary string
    return decimalNumber.toString(2);
}
console.log(decimalToBinary(10)); // Output: '1010'
console.log(decimalToBinary(255)); // Output: '11111111'
