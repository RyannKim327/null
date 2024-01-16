function preprocessBadCharacter(pattern) {
  const badCharacterTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    badCharacterTable[pattern[i]] = pattern.length - 1 - i;
  }

  return badCharacterTable;
}

function preprocessGoodSuffix(pattern) {
  const goodSuffixTable = [];
  const lastPrefixPosition = pattern.length;

  // Step 1: Filling the table with 0 shifts
  for (let i = 0; i < pattern.length; i++) {
    goodSuffixTable[i] = 0;
  }

  // Step 2: Case 1 - When there is a suffix substring that is also a prefix
  let j = 0; // A pointer to the beginning of the potential suffix substring
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (pattern.slice(0, i + 1) === pattern.slice(lastPrefixPosition - i - 1)) {
      while (j < lastPrefixPosition - i - 1) {
        if (goodSuffixTable[j] === 0) {
          goodSuffixTable[j] = lastPrefixPosition - i - 1;
        }
        j++;
      }
    }
  }

  // Step 3: Case 2 - Default scenario where there is no suffix substring that is also a prefix
  for (let i = 0; i < pattern.length - 1; i++) {
    goodSuffixTable[pattern.length - 1 - i] = pattern.length - 1 - i + lastPrefixPosition;
  }

  return goodSuffixTable;
}
function boyerMoore(text, pattern) {
  const badCharacterTable = preprocessBadCharacter(pattern);
  const goodSuffixTable = preprocessGoodSuffix(pattern);
  let i = pattern.length - 1; // Index for pattern
  let j = pattern.length - 1; // Index for text

  while (j < text.length) {
    if (pattern[i] === text[j]) {
      // Match found
      if (i === 0) {
        // Pattern found, returning index
        return j;
      }
      i--;
      j--;
    } else {
      // Mismatch occurred
      const badCharacterShift = badCharacterTable[text[j]] || pattern.length;
      const goodSuffixShift = goodSuffixTable[i + 1];

      // Take the maximum of the shifts
      const shift = Math.max(badCharacterShift, goodSuffixShift);

      // Slide the pattern to the right
      j += shift;

      // Reset pattern index
      i = pattern.length - 1;
    }
  }

  // Pattern not found in text
  return -1;
}
const text = "This is a sample text string.";
const pattern = "sample";

const index = boyerMoore(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}.`);
} else {
  console.log("Pattern not found.");
}
