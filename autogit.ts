function reverseString(str: string): string {
  return [...str].reverse().join('');
}
function reverseString(str: string): string {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
function reverseString(str: string): string {
  return str.split('').reduce((rev, char) => char + rev, '');
}
function reverseString(str: string): string {
  if (!str) return str;
  return reverseString(str.substr(1)) + str[0];
}
const originalString = 'Hello, World!';
const reversedString1 = reverseString(originalString); // '!dlroW ,olleH'
const reversedString2 = reverseString(originalString); // '!dlroW ,olleH'
const reversedString3 = reverseString(originalString); // '!dlroW ,olleH'
const reversedString4 = reverseString(originalString); // '!dlroW ,olleH'
const reversedString5 = reverseString(originalString); // '!dlroW ,olleH'

console.log(reversedString1);
console.log(reversedString2);
console.log(reversedString3);
console.log(reversedString4);
console.log(reversedString5);
