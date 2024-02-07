function boyerMooreSearch(text, pattern) {

}
function preprocessPattern(pattern) {
  const table = {};

  // Bad character table
  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  // Good suffix table
  const suffixes = [];
  const prefix = [];
  for (let i = pattern.length - 1; i >= 0; i--) {
    suffixes[i] = 0;
    prefix[i] = false;
    if (i === pattern.length - 1) {
      suffixes[i] = 1;
    } else {
      if (pattern[i] === pattern[i + 1]) {
        suffixes[i] = suffixes[i + 1] + 1;
      }
    }
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return { badCharacterTable: table, goodSuffixTable: suffixes };
}
function boyerMooreSearch(text, pattern) {
  const result = [];
  const { badCharacterTable, goodSuffixTable } = preprocessPattern(pattern);
  let i = pattern.length - 1; // Index in the text
  let j = pattern.length - 1; // Index in the pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        // Pattern found
        result.push(i);
        i += pattern.length; // Shift i to find the next occurrence
        j = pattern.length - 1; // Reset j
      } else {
        i--;
        j--;
      }
    } else {
      const shiftBadCharacter = badCharacterTable[text[i]] || pattern.length;
      const shiftGoodSuffix = goodSuffixTable[j];

      i += Math.max(shiftBadCharacter, shiftGoodSuffix);
      j = pattern.length - 1; // Reset j
    }
  }

  return result;
}
const text = "ABAAABCD";
const pattern = "ABC";

const result = boyerMooreSearch(text, pattern);
console.log(result); // Output: [4]
