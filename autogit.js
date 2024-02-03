function createBadCharTable(pattern) {
  const table = new Map();

  for (let i = 0; i < pattern.length - 1; i++) {
    table.set(pattern[i], pattern.length - 1 - i);
  }

  return table;
}
function createSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let lastPrefixPosition = pattern.length;

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    table[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = suffixLength(pattern, i);
    table[suffixLength] = pattern.length - 1 - i + suffixLength;
  }

  return table;
}

function isPrefix(pattern, position) {
  for (let i = position, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function suffixLength(pattern, position) {
  let length = 0;
  let i = position;
  let j = pattern.length - 1;

  while (i >= 0 && pattern[i] === pattern[j]) {
    length += 1;
    i -= 1;
    j -= 1;
  }

  return length;
}
function boyerMooreSearch(text, pattern) {
  const badCharTable = createBadCharTable(pattern);
  const suffixTable = createSuffixTable(pattern);

  let i = pattern.length - 1;
  while (i < text.length) {
    let j = pattern.length - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      i -= 1;
      j -= 1;
    }

    if (j === -1) {
      return i + 1; // Pattern found
    }

    const badCharOffset = badCharTable.get(text[i]);
    const goodSuffixOffset = suffixTable[j];
    i += Math.max(badCharOffset || 0, goodSuffixOffset);
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
