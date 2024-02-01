let str = "Hello, World! This is a string with spaces.";
let stringWithoutSpaces = str.split(' ').join('');
console.log(stringWithoutSpaces);
let str = "Hello, World! This is a string with spaces.";
let stringWithoutSpaces = str.replace(/\s/g, '');
console.log(stringWithoutSpaces);
let str = "Hello, World! This is a string with spaces.";
let stringWithoutSpaces = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    stringWithoutSpaces += str[i];
  }
}
console.log(stringWithoutSpaces);
