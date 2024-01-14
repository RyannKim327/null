function generateBadCharTable(pattern) {
  const table = new Array(256).fill(-1); // Initialize table with -1

  for (let i = 0; i < pattern.length; i++) {
    const charCode = pattern.charCodeAt(i);
    table[charCode] = i;
  }

  return table;
}
function generateSuffixes(pattern) {
  const suffixes = new Array(pattern.length).fill(0);
  let i = pattern.length - 1;
  let j = pattern.length;

  suffixes[i] = j;

  while (i > 0) {
    while (j < pattern.length && pattern[i - 1] !== pattern[j - 1]) {
      if (suffixes[j] === 0) {
        suffixes[j] = j - i;
      }
      j = suffixes[j];
    }

    i--;
    j--;
    suffixes[i] = j;
  }

  return suffixes;
}

function generateGoodSuffixTable(pattern) {
  const suffixes = generateSuffixes(pattern);
  const table = new Array(pattern.length).fill(0);

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (let j = 0; j < pattern.length - 1 - i; j++) {
        if (table[j] === 0) {
          table[j] = pattern.length - 1 - i;
        }
      }
    }
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.length - 1 - suffixes[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreSearch(string, pattern) {
  const patternLength = pattern.length;
  const stringLength = string.length;

  if (patternLength > stringLength) {
    return -1;
  }

  const badCharTable = generateBadCharTable(pattern);
  const goodSuffixTable = generateGoodSuffixTable(pattern);

  let shift = 0;

  while (shift <= stringLength - patternLength) {
    let mismatch = false;

    for (let i = patternLength - 1; i >= 0; i--) {
      const charIndex = shift + i;
      if (pattern[i] !== string[charIndex]) {
        const badCharShift = badCharTable[string.charCodeAt(charIndex)] || 0;
        const goodSuffixShift = goodSuffixTable[i];

        shift += Math.max(badCharShift, goodSuffixShift);
        mismatch = true;
        break;
      }
    }

    if (!mismatch) {
      return shift; // Pattern found at index 'shift'
    }
  }

  return -1; // Pattern not found
}
const searchString = "This is a sample string";
const pattern = "sample";

const index = boyerMooreSearch(searchString, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
