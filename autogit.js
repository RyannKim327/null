function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

// Example
let decimalNumber = 42;
let binaryNumber = decToBin(decimalNumber);
console.log(binaryNumber);  // Output: 101010
