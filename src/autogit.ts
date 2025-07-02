function boyerMooreHorspoolSearch(text: string, pattern: string): number[] {
  const patternLength = pattern.length;
  const textLength = text.length;
  const resultIndices: number[] = [];

  if (patternLength === 0 || textLength < patternLength) {
    return resultIndices;
  }

  // Step 1: Preprocessing - create the shift table
  const skipTable: { [char: string]: number } = {};

  for (let i = 0; i < patternLength - 1; i++) {
    skipTable[pattern[i]] = patternLength - 1 - i;
  }

  // Default shift for characters not in the pattern
  const defaultShift = patternLength;

  // Step 2: Search
  let index = 0;
  while (index <= textLength - patternLength) {
    let matched = true;
    // Compare pattern from end to start
    for (let i = patternLength - 1; i >= 0; i--) {
      if (text[index + i] !== pattern[i]) {
        // Character mismatch found, decide shift
        const shiftChar = text[index + patternLength - 1];
        const shift = skipTable[shiftChar] || defaultShift;
        index += shift;
        matched = false;
        break;
      }
    }

    if (matched) {
      // Match found, record index
      resultIndices.push(index);
      // Shift by one to find potential overlapping matches
      index += 1;
    }
  }

  return resultIndices;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABC";

const matches = boyerMooreHorspoolSearch(text, pattern);
console.log(matches); // Output: [10]
