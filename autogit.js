function preprocessBadCharacter(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}

function preprocessGoodSuffix(pattern) {
  const table = {};
  const lastPrefixPosition = pattern.length;
  
  // Case 1: Full match
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    
    table[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
  }
  
  // Case 2: Partial match
  for (let i = 0; i < pattern.length - 1; i++) {
    let suffixLen = suffixLength(pattern, i);
    table[suffixLen] = pattern.length - 1 - i + suffixLen;
  }

  return table;
}

function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }

  return true;
}

function suffixLength(pattern, p) {
  let suffixLen = 0;
  for (let i = p, j = pattern.length - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    suffixLen++;
  }
  return suffixLen;
}
function boyerMoore(pattern, text) {
  const patternLen = pattern.length;
  const textLen = text.length;
  const tableBadCharacter = preprocessBadCharacter(pattern);
  const tableGoodSuffix = preprocessGoodSuffix(pattern);
  let offset = 0;

  while (offset <= textLen - patternLen) {
    let i = patternLen - 1;

    while (i >= 0 && pattern[i] === text[offset + i]) {
      i--;
    }

    if (i === -1) {
      // Match found
      return offset;
    } else {
      const badCharacterShift = tableBadCharacter[text[offset + i]] || patternLen;
      const goodSuffixShift = tableGoodSuffix[i] || patternLen;
      offset += Math.max(badCharacterShift, goodSuffixShift);
    }
  }

  // No match found
  return -1;
}
const text = "This is a sample text for testing Boyer-Moore algorithm";
const pattern = "Boyer-Moore";

const result = boyerMoore(pattern, text);

if (result !== -1) {
  console.log(`Pattern found at index ${result}`);
} else {
  console.log("Pattern not found");
}
