function preprocessPattern(pattern) {
  const badChar = new Array(256).fill(-1);
  const goodSuffix = new Array(pattern.length);

  // Preprocessing bad character array
  for (let i = 0; i < pattern.length; i++) {
    badChar[pattern[i].charCodeAt(0)] = i;
  }

  // Preprocessing good suffix array
  let lastPrefixPosition = pattern.length;
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    goodSuffix[i] = lastPrefixPosition - i + pattern.length - 1;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = suffix(pattern, i);
    if (pattern[i - suffixLength] !== pattern[pattern.length - 1 - suffixLength]) {
      goodSuffix[pattern.length - 1 - suffixLength] = pattern.length - 1 - i + suffixLength;
    }
  }

  return { badChar, goodSuffix };
}

// Helper function for goodSuffix array
function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

// Helper function for goodSuffix array
function suffix(pattern, p) {
  let suffixLength = 0;
  for (let i = p, j = pattern.length - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    suffixLength += 1;
  }
  return suffixLength;
}
function boyerMoore(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  const { badChar, goodSuffix } = preprocessPattern(pattern);

  let shifts = [];

  // Initialization of shifts array
  for (let i = 0; i < patternLength; i++) {
    shifts[i] = patternLength;
  }
  for (let i = 0; i < patternLength - 1; i++) {
    shifts[pattern[i].charCodeAt(0)] = patternLength - 1 - i;
  }

  let i = patternLength - 1;
  while (i < textLength) {
    let j = patternLength - 1;
    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j === -1) {
      return i + 1; // match found
    }

    i += Math.max(shifts[text[i].charCodeAt(0)], j - badChar[text[i].charCodeAt(0)]);
  }

  return -1; // match not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const index = boyerMoore(text, pattern);
if (index !== -1) {
  console.log("Pattern found at index:", index);
} else {
  console.log("Pattern not found");
}
