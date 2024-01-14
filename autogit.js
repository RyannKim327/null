function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString('Hello')); // Output: olleH
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage
console.log(reverseString('Hello')); // Output: olleH
function reverseString(str) {
  return str.split('').reduce((reversedStr, char) => char + reversedStr, '');
}

// Example usage
console.log(reverseString('Hello')); // Output: olleH
