function buildSkipTable(pattern: string): Record<string, number> {
  const skipTable: Record<string, number> = {};
  const patternLength = pattern.length;

  // Initialize all characters with the default shift
  for (let i = 0; i < patternLength - 1; i++) {
    skipTable[pattern[i]] = patternLength - 1 - i;
  }

  return skipTable;
}
function boyerMooreHorspool(text: string, pattern: string): number {
  if (pattern.length === 0) return 0;
  if (pattern.length > text.length) return -1;

  const skipTable = buildSkipTable(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  let i = 0;

  while (i <= textLength - patternLength) {
    let matchFound = true;

    // Compare pattern from right to left
    for (let j = patternLength - 1; j >= 0; j--) {
      if (text[i + j] !== pattern[j]) {
        // Mismatch - decide how far to shift
        const shiftChar = text[i + patternLength - 1];
        const shift = skipTable[shiftChar] ?? patternLength;
        i += shift;
        matchFound = false;
        break;
      }
    }

    if (matchFound) {
      // Match found!
      return i;
    }
  }

  return -1; // Not found
}
const text = "here is some sample text for testing";
const pattern = "sample";

const index = boyerMooreHorspool(text, pattern);

console.log(index); // Should output the starting index of 'sample', e.g., 17
