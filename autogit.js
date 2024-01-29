function generateBadCharTable(pattern) {
  const table = {};
  const patternLength = pattern.length - 1;
  for (let i = 0; i < patternLength; i++) {
    table[pattern[i]] = patternLength - i;
  }
  return table;
}
function searchBMH(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  const table = generateBadCharTable(pattern);
  let shift = 0;
  
  while (shift <= textLength - patternLength) {
    let mismatchIndex = patternLength - 1;

    while (pattern[mismatchIndex] === text[shift + mismatchIndex]) {
      if (mismatchIndex === 0) {
        // Pattern found at the current shift
        return shift;
      }
      mismatchIndex--;
    }

    const badCharShift = table[text[shift + patternLength - 1]];
    shift += badCharShift || patternLength;
  }

  // Pattern not found in text
  return -1;
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const position = searchBMH(text, pattern);
if (position !== -1) {
  console.log(`Pattern found at index ${position}`);
} else {
  console.log("Pattern not found in text");
}
