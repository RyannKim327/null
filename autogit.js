function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}
const myString = "hello";
const myChar = "l";
const occurrences = countOccurrences(myString, myChar);

console.log(`The character "${myChar}" occurs ${occurrences} time(s) in the string.`);
The character "l" occurs 2 time(s) in the string.
