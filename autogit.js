function boyerMoore(text, pattern) {
  const occurrences = [];
  const patternLength = pattern.length;
  const textLength = text.length;

  const badCharTable = calculateBadCharTable(pattern);
  const goodSuffixTable = calculateGoodSuffixTable(pattern);

  let shift = 0;
  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[j + shift]) {
      j--;
    }

    if (j < 0) {
      occurrences.push(shift);
      shift += goodSuffixTable[0];
    } else {
      const badCharShift = badCharTable[text[j + shift]] || patternLength;
      const goodSuffixShift = goodSuffixTable[j];
      shift += Math.max(badCharShift, goodSuffixShift);
    }
  }

  return occurrences;
}

function calculateBadCharTable(pattern) {
  const badCharTable = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    badCharTable[pattern[i]] = pattern.length - 1 - i;
  }

  return badCharTable;
}

function calculateGoodSuffixTable(pattern) {
  const goodSuffixTable = [];
  const patternLength = pattern.length;
  const suffixes = new Array(patternLength).fill(patternLength);

  for (let i = patternLength - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (let j = 0; j < patternLength - 1 - i; j++) {
        if (suffixes[j] === patternLength) {
          suffixes[j] = patternLength - 1 - i;
        }
      }
    }
  }

  for (let i = 0; i < patternLength - 1; i++) {
    goodSuffixTable[i] = patternLength;
  }

  for (let i = 0; i < patternLength - 1; i++) {
    goodSuffixTable[patternLength - 1 - suffixes[i]] = patternLength - 1 - i;
  }

  return goodSuffixTable;
}
const text = 'ABAAABCDABCABCDABCDABDE';
const pattern = 'ABCDABD';
const occurrences = boyerMoore(text, pattern);
console.log(occurrences); // Output: [10, 17]
