function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example
const decimalNumber = 10;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 1010
