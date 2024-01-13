function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage
const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: '!dlrow ,olleH'
function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

// Example usage
const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: '!dlrow ,olleH'
function reverseString(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

// Example usage
const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: '!dlrow ,olleH'
