function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Output: "olleH"
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

console.log(reverseString('Hello')); // Output: "olleH"
function reverseString(str) {
  return [...str].reverse().join('');
}

console.log(reverseString('Hello')); // Output: "olleH"
