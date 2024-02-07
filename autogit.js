function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

const myString = "Hello, World!";
const myChar = "l";
const occurrences = countOccurrences(myString, myChar);

console.log(`The character "${myChar}" appears ${occurrences} times in "${myString}".`);
