function decimalToBinary(decimal) {
  // Check if the input is a valid number
  if (isNaN(decimal) || !isFinite(decimal)) {
    return "Invalid input, please provide a number.";
  }

  // Convert decimal to binary using toString() method
  const binary = decimal.toString(2);

  return binary;
}

// Example usage
const decimal = 10;
const binary = decimalToBinary(decimal);
console.log(binary); // Output: "1010"
