function decimalToBinary(decimal) {
    // Check if the input is a valid number
    if (isNaN(decimal) || decimal < 0 || !Number.isInteger(decimal)) {
        return "Invalid input. Please enter a positive integer.";
    }
    
    // Convert decimal to binary
    let binary = (decimal >>> 0).toString(2);
    
    return binary;
}

// Example usage
console.log(decimalToBinary(10)); // Output: 1010
