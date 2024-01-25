function preprocessPattern(pattern) {
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

  const skipTable = preprocessPattern(pattern);
  let i = patternLength - 1;

  while (i < textLength) {
    let k = 0;

    while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
      k++;
    }

    if (k === patternLength) {
      return i - patternLength + 1; // Match found
    }

    const skip = skipTable[text[i]] || patternLength;

    i += skip;
  }

  return -1; // Match not found
}
const text = "This is a sample text where the pattern will be searched.";
const pattern = "pattern";

const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at index ${result}`);
