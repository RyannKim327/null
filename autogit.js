function BoyerMoore(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength === 0) return 0;

  const lastTable = buildLastTable(pattern);

  let i = patternLength - 1;
  let j = patternLength - 1;

  while (i < textLength) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        return i; // Match found
      } else {
        i--;
        j--;
      }
    } else {
      i += patternLength - Math.min(j, 1 + lastTable[text[i].charCodeAt()]);
      j = patternLength - 1;
    }
  }

  return -1; // No match found
}

function buildLastTable(pattern) {
  const lastTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    lastTable[pattern[i].charCodeAt()] = i;
  }

  return lastTable;
}
const text = "This is a sample text";
const pattern = "sample";

const index = BoyerMoore(text, pattern);
console.log(index); // Output: 10
