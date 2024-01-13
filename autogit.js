function calculateGoodSuffix(pattern) {
  const suffixLengths = new Array(pattern.length);
  const isSuffix = (i, j) => pattern.slice(i).startsWith(pattern.slice(j));

  for (let i = pattern.length - 2; i >= 0; i--) {
    let j = i;
    while (j >= 0 && pattern[j] === pattern[j + 1]) j--;
    suffixLengths[i] = i - j;
    while (j >= 0 && !isSuffix(i, j)) {
      suffixLengths[i]++;
      j--;
    }
  }

  return suffixLengths;
}

function boyerMooreSearch(text, pattern) {
  const badChar = new Array(256).fill(-1);
  const patternLength = pattern.length;
  const goodSuffix = calculateGoodSuffix(pattern);

  // Preprocessing the bad character array
  for (let i = 0; i < patternLength; i++) {
    badChar[pattern.charCodeAt(i)] = i;
  }

  let textIndex = patternLength - 1;
  let patternIndex = patternLength - 1;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === 0) {
        // Pattern found
        return textIndex;
      }
      patternIndex--;
      textIndex--;
    } else {
      const badCharShift = patternIndex - badChar[text.charCodeAt(textIndex)];
      const goodSuffixShift = goodSuffix[patternIndex];

      textIndex += Math.max(badCharShift, goodSuffixShift);
      patternIndex = patternLength - 1;
    }
  }

  // Pattern not found
  return -1;
}

// Example usage
const text = "This is a test text";
const pattern = "test";

console.log(boyerMooreSearch(text, pattern)); // Output: 10 (index of 'test' in the text)
