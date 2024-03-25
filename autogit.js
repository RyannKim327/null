function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Example
console.log(decimalToBinary(10)); // Output: "1010"
