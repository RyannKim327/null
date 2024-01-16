function buildBadCharTable(pattern) {
  const table = new Map();
  for (let i = 0; i < pattern.length - 1; i++) {
    table.set(pattern[i], pattern.length - i - 1);
  }
  return table;
}
function buildGoodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let [lastPrefixPosition, patternLength] = [pattern.length, pattern.length + 1];

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) lastPrefixPosition = i + 1;
    table[patternLength - i - 1] = lastPrefixPosition - i + patternLength - 1;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = suffixLengthPattern(pattern, i);
    table[suffixLength] = patternLength - i + suffixLength - 1;
  }

  return table;
}

function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) return false;
  }
  return true;
}

function suffixLengthPattern(pattern, p) {
  let length = 0;
  for (let i = p, j = pattern.length - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    length++;
  }
  return length;
}
function boyerMooreSearch(text, pattern) {
  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);

  let [i, patternLength] = [0, pattern.length];
  while (i <= text.length - patternLength) {
    let j = patternLength - 1;
    while (j >= 0 && pattern[j] === text[i + j]) j--;

    if (j === -1) {
      // Match found at index i
      return i;
    } else {
      const badCharShift = badCharTable.get(text[i + j]) || patternLength;
      const goodSuffixShift = goodSuffixTable[j + 1];

      i += Math.max(badCharShift, goodSuffixShift);
    }
  }

  // No match found
  return -1;
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'ipsum';

const matchIndex = boyerMooreSearch(text, pattern);

if (matchIndex >= 0) {
  console.log(`Pattern found at index ${matchIndex}`);
} else {
  console.log('Pattern not found');
}
