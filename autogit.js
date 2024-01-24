function generateBadCharacterShift(pattern) {
  const table = {};
  const len = pattern.length;

  for (let i = 0; i < len - 1; i++) {
    table[pattern[i]] = len - 1 - i;
  }

  return table;
}

function generateGoodSuffixShift(pattern) {
  const table = {};
  const len = pattern.length;
  const suffixes = generateSuffixes(pattern);

  for (let i = 0; i < len; i++) {
    table[i] = len;
  }

  let j = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (; j < len - 1 - i; j++) {
        if (table[j] === len) {
          table[j] = len - 1 - i;
        }
      }
    }
  }

  for (let i = 0; i < len - 2; i++) {
    table[len - 1 - suffixes[i]] = len - 1 - i;
  }

  return table;
}

function generateSuffixes(pattern) {
  const len = pattern.length;
  const suffixes = Array(len).fill(0);
  let g = len - 1;
  let f = len - 1;

  suffixes[len - 1] = len;
  
  for (let i = len - 2; i >= 0; i--) {
    if (i > g && suffixes[i + len - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + len - 1 - f];
    } else {
      if (i < g) {
        g = i;
      }
      f = i;

      while (g >= 0 && pattern[g] === pattern[g + len - 1 - f]) {
        g--;
      }

      suffixes[i] = f - g;
    }
  }

  return suffixes;
}

function generateShiftTable(pattern) {
  const badCharacterShift = generateBadCharacterShift(pattern);
  const goodSuffixShift = generateGoodSuffixShift(pattern);
  const shiftTable = {};

  for (let i = 0; i < pattern.length; i++) {
    shiftTable[i] = Math.max(goodSuffixShift[i], badCharacterShift[pattern[i]] || pattern.length);
  }

  return shiftTable;
}
function boyerMooreSearch(text, pattern) {
  const shiftTable = generateShiftTable(pattern);
  const n = text.length;
  const m = pattern.length;

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      return i; // Pattern found at index i
    }

    i += shiftTable[j];
  }

  return -1; // Pattern not found
}
const text = "This is a sample text.";
const pattern = "sample";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
