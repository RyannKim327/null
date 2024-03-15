function decimalToBinary(decimalNumber) {
    return (decimalNumber >>> 0).toString(2);
}

// Usage
console.log(decimalToBinary(10)); // Output: 1010
