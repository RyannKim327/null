function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Example usage
const originalString = 'Hello World';
const reversedString = reverseWords(originalString);
console.log(reversedString);  // Output: 'World Hello'
