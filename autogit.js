function boyerMooreSearch(text, pattern) {
  const badMatchTable = {};
  const goodSuffixTable = [];
  const patternLength = pattern.length;
  
  // Populate badMatchTable
  for (let i = 0; i < patternLength - 1; i++) {
    badMatchTable[pattern[i]] = patternLength - i - 1;
  }

  // Populate goodSuffixTable
  buildGoodSuffixTable(pattern, goodSuffixTable);
  
  let i = patternLength - 1;

  while (i < text.length) {
    let j = patternLength - 1;
    let k = i;

    while (j >= 0 && text[k] === pattern[j]) {
      j--;
      k--;
    }

    if (j === -1) {
      return k + 1; // Match found, return the starting index
    } else {
      const badMatchShift = badMatchTable[text[k]] || patternLength;
      const goodSuffixShift = goodSuffixTable[j];

      i += Math.max(badMatchShift, goodSuffixShift);
    }
  }

  return -1; // No match found
}

function buildGoodSuffixTable(pattern, goodSuffixTable) {
  const patternLength = pattern.length;
  let lastPrefixPosition = patternLength;

  for (let i = patternLength - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }

    goodSuffixTable[i] = lastPrefixPosition + (patternLength - 1 - i);
  }

  for (let i = 0; i < patternLength - 1; i++) {
    const suffixLength = getSuffixLength(pattern, i);
    if (pattern[i - suffixLength] !== pattern[patternLength - 1 - suffixLength]) {
      goodSuffixTable[patternLength - 1 - suffixLength] = patternLength - 1 - i + suffixLength;
    }
  }
}

function isPrefix(pattern, startIndex) {
  const patternLength = pattern.length;
  for (let i = startIndex, j = 0; i < patternLength; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function getSuffixLength(pattern, startIndex) {
  let length = 0;
  let j = pattern.length - 1;
  for (let i = startIndex; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    length++;
  }
  return length;
}

// Example usage:
const text = "This is an example text for searching";
const pattern = "example";
const index = boyerMooreSearch(text, pattern);
console.log("Pattern found at index:", index);
