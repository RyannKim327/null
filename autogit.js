function buildBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - i - 1;
  }

  return table;
}

function boyerMooreSearch(text, pattern) {
  const badCharTable = buildBadCharTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let shift = 0;

  while (shift <= textLength - patternLength) {
    let matchIndex = patternLength - 1;

    while (matchIndex >= 0 && pattern[matchIndex] === text[shift + matchIndex]) {
      matchIndex--;
    }

    if (matchIndex < 0) {
      return shift;
    } else {
      const badChar = text[shift + matchIndex];
      const badCharShift = badCharTable[badChar] || patternLength;
      shift += badCharShift;
    }
  }

  return -1;
}

// Example Usage:
const text = "ababcababcabc";
const pattern = "abc";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
