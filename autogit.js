function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"
