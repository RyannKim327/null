function badCharacterMap(pattern) {
  const map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    map.set(pattern[i], pattern.length - i - 1);
  }
  return map;
}
function goodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let lastPrefixPosition = pattern.length;
  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    table[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
  }
  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLen = suffixLength(pattern, i);
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
  let len = 0;
  let j = pattern.length - 1;
  for (let i = p; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    len += 1;
  }
  return len;
}
function boyerMooreSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const badCharMap = badCharacterMap(pattern);
  const suffixTable = goodSuffixTable(pattern);

  let i = 0;
  while (i <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }
    if (j < 0) {
      return i; // Pattern found
    } else {
      const badCharShift = badCharMap.get(text[i + j]) || m;
      const goodSuffixShift = suffixTable[j];
      i += Math.max(badCharShift, goodSuffixShift);
    }
  }
  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "sit";
const resultIndex = boyerMooreSearch(text, pattern);
if (resultIndex !== -1) {
  console.log(`Pattern found at index ${resultIndex}`);
} else {
  console.log("Pattern not found");
}
