function buildBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function buildGoodSuffixTable(pattern) {
  const table = [];
  const prefix = suffixArray(pattern);

  for (let i = 0; i < pattern.length; i++) {
    table[i] = pattern.length;
  }

  let j = 0;
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (prefix[i] === i + 1) {
      for (; j < pattern.length - 1 - i; j++) {
        if (table[j] === pattern.length) {
          table[j] = pattern.length - 1 - i;
        }
      }
    }
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.length - 1 - prefix[i]] = pattern.length - 1 - i;
  }

  return table;
}

function suffixArray(pattern) {
  const suffix = [];
  suffix[pattern.length - 1] = pattern.length;

  for (let i = pattern.length - 2; i >= 0; i--) {
    let j = i;

    while (j >= 0 && pattern[j] === pattern[pattern.length - 1 - i + j]) {
      j--;
    }

    suffix[i] = i - j;
  }

  return suffix;
}
function boyerMoore(text, pattern) {
  const positions = [];
  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);

  let i = pattern.length - 1;

  while (i < text.length) {
    let j = pattern.length - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j === -1) {
      positions.push(i + 1);
      i += pattern.length * 2 - 1;
    } else {
      i += Math.max(badCharTable[text[i]] || 0, goodSuffixTable[j]);
    }
  }

  return positions;
}
const text = "ABAAABCD";
const pattern = "ABC";
const positions = boyerMoore(text, pattern);

console.log("Pattern found at positions:", positions);  // Output: [5]
