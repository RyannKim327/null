function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharTable = {};
  const goodSuffixTable = [];

  function constructBadCharTable(pattern) {
    for (let i = 0; i < patternLength; i++) {
      badCharTable[pattern[i]] = i;
    }
  }

  function constructGoodSuffixTable(pattern) {
    const borders = [];
    const suffixes = [];

    const lastChar = pattern[patternLength - 1];
    borders[patternLength - 1] = patternLength;

    for (let i = patternLength - 2; i >= 0; i--) {
      if (pattern[i] === lastChar) borders[i] = i + 1;
      else borders[i] = borders[i + 1];
    }

    for (let i = 0; i < patternLength; i++) {
      suffixes[i] = 0;
    }

    let j = 0;
    for (let i = patternLength - 1; i >= 0; i--) {
      if (isPrefix(pattern, i + 1)) j = patternLength - 1 - i;
      suffixes[j] = patternLength - 1 - i;
      j++;
    }

    for (let i = 0; i < patternLength - 1; i++) {
      const len = getSuffixLength(pattern, i);
      if (pattern[i - len] !== pattern[patternLength - 1 - len]) {
        suffixes[patternLength - 1 - len] = patternLength - 1 - i + len;
      }
    }

    for (let i = 0; i < patternLength; i++) {
      goodSuffixTable[i] = patternLength;
    }

    for (let i = patternLength - 1; i >= 0; i--) {
      if (suffixes[i] === i + 1) {
        for (let j = 0; j < patternLength - 1 - i; j++) {
          if (goodSuffixTable[j] === patternLength) {
            goodSuffixTable[j] = patternLength - 1 - i;
          }
        }
      }
    }

    for (let i = 0; i <= patternLength - 2; i++) {
      goodSuffixTable[patternLength - 1 - suffixes[i]] = patternLength - 1 - i;
    }
  }

  function isPrefix(pattern, p) {
    for (let i = p, j = 0; i < patternLength; i++, j++) {
      if (pattern[i] !== pattern[j]) return false;
    }
    return true;
  }

  function getSuffixLength(pattern, p) {
    let len = 0;

    for (let i = p, j = patternLength - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
      len++;
    }

    return len;
  }

  constructBadCharTable(pattern);
  constructGoodSuffixTable(pattern);

  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      return i;
    } else {
      const badCharSkip = j - badCharTable[text[i + j]];
      const goodSuffixSkip = goodSuffixTable[j];

      i += Math.max(badCharSkip, goodSuffixSkip);
    }
  }

  return -1;
}
const text = 'This is an example string.';
const pattern = 'example';

const result = boyerMooreSearch(text, pattern);
console.log(result);  // Output: 11
