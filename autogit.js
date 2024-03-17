function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example usage
const decimal = 10;
const binary = decimalToBinary(decimal);
console.log(binary); // Output: 1010
