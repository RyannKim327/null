function buildBadCharacterTable(pattern) {
  const table = {};
  const patternLength = pattern.length;

  // Initialize all characters in the pattern with their last occurrence position
  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - 1 - i;
  }

  return table;
}
function buildGoodSuffixTable(pattern) {
  const table = {};
  const patternLength = pattern.length;
  const suffixes = new Array(patternLength).fill(0);

  // Compute suffixes array
  let lastPrefixIndex = findPrefix(pattern);
  if (lastPrefixIndex === -1) {
    lastPrefixIndex = patternLength;
  }

  // Case 1: There is no prefix which is also a suffix
  for (let i = patternLength - 1; i >= 0; i--) {
    if (suffixes[i] === 0) {
      suffixes[i] = lastPrefixIndex;
    }

    if (i === lastPrefixIndex) {
      lastPrefixIndex = findPrefix(pattern.substring(0, i));
      if (lastPrefixIndex === -1) {
        lastPrefixIndex = i;
      }
    }
  }

  // Case 2: The suffix is a prefix of the pattern
  for (let i = 0; i < patternLength - 1; i++) {
    const suffixLength = findSuffix(pattern.substring(i));
    if (suffixLength !== 0 && suffixLength !== patternLength - i) {
      table[patternLength - 1 - suffixLength] = patternLength - 1 - i;
    }
  }

  // Case 3: The suffix is a substring that occurs elsewhere in the pattern
  for (let i = 0; i < patternLength - 1; i++) {
    const suffixLength = findSuffix(pattern.substring(i));
    if (suffixLength === patternLength - i) {
      for (let j = 0; j < i; j++) {
        if (!table[j]) {
          table[j] = suffixLength;
        }
      }
    }
  }

  return { table, suffixes };
}

// Helper functions for building the Good Suffix Table

function findPrefix(pattern) {
  const patternLength = pattern.length;
  for (let i = patternLength - 1; i > 0; i--) {
    const prefix = pattern.substring(0, i);
    const suffix = pattern.substring(patternLength - i, patternLength);
    if (prefix === suffix) {
      return i;
    }
  }
  return -1;
}

function findSuffix(pattern) {
  const patternLength = pattern.length;
  for (let i = patternLength - 1; i >= 0; i--) {
    const prefix = pattern.substring(0, i);
    const suffix = pattern.substring(patternLength - i, patternLength);
    if (prefix === suffix) {
      return i;
    }
  }
  return 0;
}
function boyerMooreSearch(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  if (patternLength > textLength) {
    return -1;
  }

  const badCharacterTable = buildBadCharacterTable(pattern);
  const { table, suffixes } = buildGoodSuffixTable(pattern);

  let i = patternLength - 1;
  while (i < textLength) {
    let j = patternLength - 1;

    // Matching from right to left
    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j < 0) {
      // Pattern found
      return i + 1;
    } else {
      const badCharacterShift = badCharacterTable[text[i]] || patternLength;
      const goodSuffixShift =
        j !== patternLength - 1
          ? table[j + 1]
          : table[patternLength - 1 - suffixes[patternLength - 1]];

      i += Math.max(badCharacterShift, goodSuffixShift);
    }
  }

  // Pattern not found
  return -1;
}
const text = 'This is a sample text to search within';
const pattern = 'sample';

console.log(boyerMooreSearch(text, pattern)); // Output: 10
