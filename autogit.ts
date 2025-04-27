function decimalToBinary(decimalNumber: number): string {
    return decimalNumber.toString(2);
}

// Usage
const num = 29;
console.log(decimalToBinary(num)); // Output: "11101"
function decimalToBinary(decimalNumber: number): string {
    if (!Number.isInteger(decimalNumber)) {
        throw new Error("Input must be an integer");
    }
    if (decimalNumber < 0) {
        // Handling negative numbers by converting the absolute value and prefixing a minus sign
        return '-' + Math.abs(decimalNumber).toString(2);
    }
    return decimalNumber.toString(2);
}
