function createBadCharTable(pattern) {
  const table = new Map();
  
  // Initialize all characters with a default jump value
  for (let i = 0; i < pattern.length; i++) {
    table.set(pattern[i], pattern.length - i - 1);
  }
  
  return table;
}

function createGoodSuffixTable(pattern) {
  const table = [];
  const suffixes = getSuffixes(pattern);
  const borders = getBorders(pattern);
  
  // Case 1: Matching suffix
  for (let i = 0; i < pattern.length; i++) {
    table[i] = pattern.length - borders[pattern.length - i - 1];
  }
  
  // Case 2: Prefix of pattern matches a suffix
  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = suffixes[pattern.length - 1 - i];
    if (table[suffixLength] === undefined) {
      table[suffixLength] = pattern.length - 1 - i + suffixLength;
    }
  }
  
  // Case 3: No prefix matches a suffix
  for (let i = 0; i < pattern.length - 1; i++) {
    const shift = pattern.length - borders[i];
    if (table[i] === undefined || table[i] > shift) {
      table[i] = shift;
    }
  }
  
  return table;
}

function getSuffixes(pattern) {
  const suffixes = [0];
  let lastPrefixPosition = pattern.length;
  
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    suffixes[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
  }
  
  return suffixes;
}

function isPrefix(pattern, position) {
  for (let i = position, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  
  return true;
}

function getBorders(pattern) {
  const borders = [0];
  let border = pattern.length;
  
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isSuffix(pattern, i + 1)) {
      border = i + 1;
    }
    borders[pattern.length - 1 - i] = border;
  }
  
  return borders;
}

function isSuffix(pattern, position) {
  for (let i = 0, j = position; j < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  
  return true;
}
function boyerMooreSearch(text, pattern) {
  const badCharTable = createBadCharTable(pattern);
  const goodSuffixTable = createGoodSuffixTable(pattern);
  
  let i = pattern.length - 1; // Pointer in the text
  
  while (i < text.length) {
    let j = pattern.length - 1; // Pointer in the pattern
    
    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }
    
    if (j === -1) {
      // Pattern found at index i + 1
      return i + 1;
    }
    
    const badCharShift = badCharTable.get(text[i]) || pattern.length;
    const goodSuffixShift = goodSuffixTable[j] || pattern.length;

    i += Math.max(badCharShift, goodSuffixShift);
  }
  
  return -1; // Pattern not found
}
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = "fox";

const index = boyerMooreSearch(text, pattern);
console.log(index); // Outputs: 16
