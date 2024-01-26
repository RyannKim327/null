function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

let myString = "Hello, World!";
let myCharacter = "o";

let occurrences = countOccurrences(myString, myCharacter);
console.log(`The character "${myCharacter}" occurs ${occurrences} times in the string.`);
