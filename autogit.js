function preprocessPattern(pattern) {
  const patternLength = pattern.length;
  const skipTable = new Array(256).fill(patternLength);

  for (let i = 0; i < patternLength - 1; i++) {
    skipTable[pattern.charCodeAt(i)] = patternLength - i - 1;
  }

  return skipTable;
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const skipTable = preprocessPattern(pattern);

  let i = patternLength - 1;

  while (i < textLength) {
    let j = patternLength - 1;
    let k = i;

    while (j >= 0 && text[k] === pattern[j]) {
      j--;
      k--;
    }

    if (j === -1) {
      // Match found
      return k + 1;
    }

    i += skipTable[text.charCodeAt(i)];
  }

  // Pattern not found
  return -1;
}
const text = "Hello, world!";
const pattern = "world";
const result = boyerMooreSearch(text, pattern);
console.log("Pattern found at index:", result); // Output: Pattern found at index: 7
