function preprocessPattern(pattern) {
  const badCharTable = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    badCharTable.set(pattern[i], i);
  }
  
  const suffixTable = new Array(pattern.length).fill(0);
  let lastPrefixPosition = pattern.length;

  // Set suffixes with no prefix to the end of the pattern
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    suffixTable[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
  }

  // Set suffixes with a partial prefix match
  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = suffixLengthFromIndex(pattern, i);
    suffixTable[suffixLength] = pattern.length - 1 - i + suffixLength;
  }

  return { badCharTable, suffixTable };
}

function isPrefix(pattern, index) {
  for (let i = index, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function suffixLengthFromIndex(pattern, index) {
  let length = 0;
  let i = index;
  let j = pattern.length - 1;

  while (i >= 0 && pattern[i] === pattern[j]) {
    length += 1;
    i--;
    j--;
  }

  return length;
}
function boyerMooreSearch(text, pattern) {
  const { badCharTable, suffixTable } = preprocessPattern(pattern);
  const occurrences = [];
  let i = 0;

  while (i <= text.length - pattern.length) {
    let j = pattern.length - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found
      occurrences.push(i);
      i += suffixTable[0];
    } else {
      const badCharSkip = j - badCharTable.get(text[i + j]);
      const suffixSkip = suffixTable[j];

      i += Math.max(badCharSkip, suffixSkip);
    }
  }

  return occurrences;
}
const text = "This is an example text for testing Boyer-Moore algorithm.";
const pattern = "example";

const occurrences = boyerMooreSearch(text, pattern);
console.log("Occurrences found at indices:", occurrences);
