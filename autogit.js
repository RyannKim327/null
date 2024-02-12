function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello World')); // Output: "dlroW olleH"
function reverseString(str) {
  let reversedString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString('Hello World')); // Output: "dlroW olleH"
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString('Hello World')); // Output: "dlroW olleH"
