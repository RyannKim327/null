function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example usage
const decimalNumber = 42;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(binaryRepresentation); // Output: 101010
