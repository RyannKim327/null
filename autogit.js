function boyerMooreHorspool(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const skipTable = generateSkipTable(pattern);

  function generateSkipTable(pattern) {
    const skipTable = {};

    for (let i = 0; i < patternLength - 1; i++) {
      skipTable[pattern[i]] = patternLength - i - 1;
    }

    return skipTable;
  }

  let currentIndex = 0;

  while (currentIndex <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && text[currentIndex + j] === pattern[j]) {
      j--;
    }

    if (j === -1) {
      return currentIndex; // Pattern found
    }

    const skip = skipTable[text[currentIndex + patternLength]] || patternLength;
    currentIndex += skip;
  }

  return -1; // Pattern not found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const startIndex = boyerMooreHorspool(text, pattern);
if (startIndex !== -1) {
  console.log(`Pattern found at index ${startIndex}.`);
} else {
  console.log("Pattern not found.");
}
