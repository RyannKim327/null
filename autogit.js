function preprocessBadCharacterTable(pattern) {
  const table = {};
  const length = pattern.length;

  for (let i = 0; i < length - 1; i++) {
    table[pattern[i]] = length - i - 1;
  }

  return table;
}

function preprocessGoodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  const length = pattern.length;

  let suffix = length;
  let g = length - 1;

  for (let i = length - 2; i >= 0; i--) {
    if (i > g && table[i + length - 1 - suffix] < i - g) {
      table[i] = table[i + length - 1 -suffix];
    } else {
      if (i < g) {
        suffix = i;
        g = i;
      }

      while (g >= 0 && pattern[g] === pattern[g + length - 1 - suffix]) {
        g--;
      }

      table[i] = suffix - g;
    }
  }

  return table;
}

function boyerMoore(text, pattern) {
  const badCharacterTable = preprocessBadCharacterTable(pattern);
  const goodSuffixTable = preprocessGoodSuffixTable(pattern);

  const textLength = text.length;
  const patternLength = pattern.length;

  let shift = 0;

  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j < 0) {
      console.log(`Pattern found at index ${shift}`);
      shift += goodSuffixTable[0];
    } else {
      const badCharacterShift = badCharacterTable[text[shift + j]] || patternLength;
      const goodSuffixShift = goodSuffixTable[j];
      shift += Math.max(badCharacterShift, goodSuffixShift);
    }
  }
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
boyerMoore(text, pattern);
