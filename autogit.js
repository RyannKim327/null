function calculateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(2, i);
  }
  return hash;
}

function rollingHash(text, oldHash, patternLength, start, end) {
  const newHash = oldHash - (text.charCodeAt(start) * Math.pow(2, patternLength - 1));
  return (newHash * 2) + text.charCodeAt(end);
}
function searchRabinKarp(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;

  const patternHash = calculateHash(pattern);
  let textHash = calculateHash(text.substring(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (pattern[j] !== text[i + j]) {
          found = false;
          break;
        }
      }

      if (found) {
        return i; // Pattern found at position i
      }
    }

    if (i < textLength - patternLength) {
      textHash = rollingHash(text, textHash, patternLength, i, i + patternLength);
    }
  }

  return -1; // Pattern not found
}
const pattern = "world";
const text = "Hello, world!";

const position = searchRabinKarp(pattern, text);
if (position === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at position ${position}`);
}
