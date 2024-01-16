function generateBadCharTable(pattern) {
  const table = new Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
  }

  return table;
}
function generateGoodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(pattern.length);
  const suffixes = new Array(pattern.length).fill(0);

  // Compute the suffixes
  for (let i = pattern.length - 2; i >= 0; i--) {
    let j = i;

    while (j >= 0 && pattern[j] === pattern[pattern.length - 1 - (i - j)]) {
      j--;
    }

    suffixes[i] = i - j;
  }

  // Case 1: Complete match at the end
  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.length - 1 - suffixes[i]] = pattern.length - 1 - i;
  }

  // Case 2: Partial match at the end
  for (let i = 0; i < pattern.length - 2; i++) {
    const length = pattern.length - 1 - suffixes[i];
    if (table[length] > pattern.length - 1 - i) {
      table[length] = pattern.length - 1 - i;
    }
  }

  return table;
}
function searchBoyerMoore(text, pattern) {
  const badCharTable = generateBadCharTable(pattern);
  const goodSuffixTable = generateGoodSuffixTable(pattern);
  const matches = [];

  let i = pattern.length - 1;
  while (i < text.length) {
    let j = pattern.length - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j === -1) {
      matches.push(i + 1);
      i++;
    } else {
      const badCharShift = badCharTable[text.charCodeAt(i)] - pattern.length + 1 + j;
      const goodSuffixShift = goodSuffixTable[j];
      i += Math.max(badCharShift, goodSuffixShift);
    }
  }

  return matches;
}
const text = "ABAAABCDBBABCDDEBCABC";
const pattern = "ABC";
const matches = searchBoyerMoore(text, pattern);
console.log(matches); // Output: [4, 14, 19]
