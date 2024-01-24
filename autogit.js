function createBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength > textLength) {
    return -1; // Pattern is longer than the text
  }

  const badCharTable = createBadCharTable(pattern);

  let shift = 0;
  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j < 0) {
      return shift; // Pattern found
    }

    shift += badCharTable[text[shift + patternLength - 1]] || patternLength;
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "adipiscing";

const index = boyerMooreHorspool(text, pattern);

if (index === -1) {
  console.log("Pattern not found.");
} else {
  console.log("Pattern found at index:", index);
}
