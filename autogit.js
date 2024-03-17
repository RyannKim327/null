function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example
let decimalNumber = 42;
let binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 101010
