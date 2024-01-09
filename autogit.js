const string = 'Hello, World!';
const reversedString = string.split('').reverse().join('');
console.log(reversedString);
function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const string = 'Hello, World!';
const reversedString = reverseString(string);
console.log(reversedString);
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const string = 'Hello, World!';
const reversedString = reverseString(string);
console.log(reversedString);
