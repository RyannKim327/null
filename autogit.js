function countOccurrence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
const string = "Hello, world!";
const character = "o";
const occurrence = countOccurrence(string, character);
console.log(`The character "${character}" occurs ${occurrence} times in the string.`);
The character "o" occurs 2 times in the string.
