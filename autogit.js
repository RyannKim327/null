function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Test the function
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is: ${binaryNumber}`);
