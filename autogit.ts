const str = "hello world";
const char = "o";
const count = str.split(char).length - 1;

console.log(`The character "${char}" occurs ${count} times in the string.`);
const str = "hello world";
const char = "o";
const count = (str.match(new RegExp(char, "g")) || []).length;

console.log(`The character "${char}" occurs ${count} times in the string.`);
