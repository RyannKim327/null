function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLen = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (prefixLen > 0 && pattern[i] !== pattern[prefixLen]) {
      prefixLen = prefixTable[prefixLen - 1];
    }
    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
    }
    prefixTable[i] = prefixLen;
  }

  return prefixTable;
}

function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];

  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixTable[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      matches.push(i - j + 1);
      j = prefixTable[j - 1];
    }
  }

  return matches;
}

// Example usage
const text = "ababcababcabc";
const pattern = "abc";
console.log(kmpSearch(text, pattern)); // Output: [2, 6, 9]
