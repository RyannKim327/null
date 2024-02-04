function preprocessPattern(pattern) {
  const table = [];
  const m = pattern.length;

  // Initialize the table with default values
  for (let i = 0; i < 256; i++) {
    table[i] = m;
  }

  // Fill the table with the correct values
  for (let i = 0; i < m - 1; i++) {
    table[pattern.charCodeAt(i)] = m - 1 - i;
  }

  return table;
}
function boyerMooreSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) return 0;

  const badCharTable = preprocessPattern(pattern);
  const goodSuffixTable = createSuffixTable(pattern);

  let i = m - 1; // Index in the text
  let j = m - 1; // Index in the pattern

  while (i < n) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        // Match found
        return i;
      }

      // Continue matching
      i--;
      j--;
    } else {
      // Mismatch
      i += Math.max(badCharTable[text.charCodeAt(i)], goodSuffixTable[j]);
      j = m - 1;
    }
  }

  // No match found
  return -1;
}
function createSuffixTable(pattern) {
  const m = pattern.length;
  const suffixTable = new Array(m);

  // Initialize and fill the suffix table
  const suffix = new Array(m);
  let lastPrefixIndex = m;

  for (let i = m - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixIndex = i + 1;
    }
    suffix[m - 1 - i] = lastPrefixIndex - i + m - 1;
  }

  for (let i = 0; i < m - 1; i++) {
    const k = getSuffixIndex(suffix, m, i);
    suffix[k] = m - 1 - i + k;
  }

  return suffix;
}

function isPrefix(pattern, p) {
  const m = pattern.length;
  let suffixLen = m - p;

  for (let i = 0; i < suffixLen; i++) {
    if (pattern[i] !== pattern[p + i]) {
      return false;
    }
  }

  return true;
}

function getSuffixIndex(suffix, m, p) {
  const suffixLen = m - p;
  for (let i = suffixLen - 1; i >= 0; i--) {
    if (suffix[i] === i + 1) {
      return i;
    }
  }

  return suffixLen;
}
