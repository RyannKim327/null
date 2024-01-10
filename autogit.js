function prepareBadCharacterTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - i - 1;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharTable = prepareBadCharacterTable(pattern);

  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found
      return i;
    } else {
      const badChar = text[i + j];
      const shift = badCharTable[badChar] || patternLength;
      i += shift;
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "sit";

const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 18
