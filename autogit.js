function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example usage
const decimalNumber = 15;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 1111
