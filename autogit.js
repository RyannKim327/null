function boyerMooreHorspool(text, pattern) {
  const badMatchTable = {};

  function initializeBadMatchTable() {
    for (let i = 0; i < pattern.length - 1; i++) {
      badMatchTable[pattern[i]] = pattern.length - 1 - i;
    }
  }

  initializeBadMatchTable();

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex <= text.length - pattern.length) {
    patternIndex = pattern.length - 1;

    while (
      patternIndex >= 0 &&
      pattern[patternIndex] === text[textIndex + patternIndex]
    ) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return textIndex; // Match found
    }

    const badMatchShift = badMatchTable[text[textIndex + pattern.length - 1]];
    textIndex += badMatchShift || pattern.length;
  }

  return -1; // No match found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const pattern = "amet";

const matchIndex = boyerMooreHorspool(text, pattern);
console.log(matchIndex); // Output: 22 (index of the word "amet")
