function buildBadCharTable(pattern) {
  const table = {};
  const lastIndex = pattern.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    table[pattern[i]] = lastIndex - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const badCharTable = buildBadCharTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found at index i
      return i;
    } else {
      // Skip based on the bad character table
      i += badCharTable[text[i + j]] || patternLength;
    }
  }

  // Pattern not found
  return -1;
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
const pattern = 'ipsum';

const index = boyerMooreHorspool(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
