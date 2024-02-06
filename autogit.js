function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversed = reverseString("Hello, world!");
console.log(reversed); // Output: "!dlrow ,olleH"
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const reversed = reverseString("Hello, world!");
console.log(reversed); // Output: "!dlrow ,olleH"
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const reversed = reverseString("Hello, world!");
console.log(reversed); // Output: "!dlrow ,olleH"
