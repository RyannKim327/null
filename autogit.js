function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const str = "javascript";
const char = "a";
const occurrences = countOccurrences(str, char);
console.log(`The character '${char}' occurs ${occurrences} times in the string '${str}'.`);
function countOccurrences(str, char) {
  const occurrences = str.split('').filter(c => c === char);
  return occurrences.length;
}
function countOccurrences(str, char) {
  const regex = new RegExp(char, 'g');
  const occurrences = str.match(regex);
  return occurrences ? occurrences.length : 0;
}
