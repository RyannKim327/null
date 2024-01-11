function preprocessPattern(pattern) {
  const table = new Array(256).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}
function boyerMooreSearch(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;
  const badCharTable = preprocessPattern(pattern);

  let shift = 0;
  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;
    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }
    if (j < 0) {
      return shift; // Match found
    } else {
      const badCharIndex = text.charCodeAt(shift + j);
      shift += Math.max(1, j - badCharTable[badCharIndex]);
    }
  }
  return -1; // No match found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";
const matchIndex = boyerMooreSearch(text, pattern);
console.log("Match found at index:", matchIndex);
