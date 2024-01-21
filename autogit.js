function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

const str = "Hello World";
const char = "o";
const count = countOccurrences(str, char);

console.log(`The character "${char}" appears ${count} times.`);
The character "o" appears 2 times.
