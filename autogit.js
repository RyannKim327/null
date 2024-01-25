function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const sentence = "Hello, world!";
const charToCount = "o";
const occurrence = countCharacter(sentence, charToCount);
console.log(`The character "${charToCount}" occurs ${occurrence} times.`);
function countCharacterRegex(str, char) {
  const regex = new RegExp(char, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const sentence = "Hello, world!";
const charToCount = "o";
const occurrence = countCharacterRegex(sentence, charToCount);
console.log(`The character "${charToCount}" occurs ${occurrence} times.`);
