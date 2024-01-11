function boyerMooreSearch(text, pattern) {
  const badMatchTable = buildBadMatchTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);

  let textIndex = pattern.length - 1;
  let patternIndex = pattern.length - 1;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === 0) {
        return textIndex; // Pattern found
      }
      patternIndex--;
      textIndex--;
    } else {
      const badMatchSkip = badMatchTable[text[textIndex].charCodeAt()];
      const goodSuffixSkip = goodSuffixTable[patternIndex];

      textIndex += Math.max(badMatchSkip, goodSuffixSkip);
      patternIndex = pattern.length - 1;
    }
  }

  return -1; // Pattern not found
}

function buildBadMatchTable(pattern) {
  const table = new Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    const charCode = pattern[i].charCodeAt();
    const distance = pattern.length - i - 1;
    table[charCode] = distance;
  }

  return table;
}

function buildGoodSuffixTable(pattern) {
  const table = new Array(pattern.length).fill(0);

  let lastPrefixIndex = pattern.length;

  for (let i = pattern.length - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixIndex = i + 1;
    }
    table[pattern.length - 1 - i] = lastPrefixIndex - i + pattern.length - 1;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const suffixLength = getSuffixLength(pattern, i);
    table[suffixLength] = pattern.length - 1 - i + suffixLength;
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

function getSuffixLength(pattern, p) {
  let suffixLength = 0;
  let i = p;
  let j = pattern.length - 1;

  while (i >= 0 && pattern[i] === pattern[j]) {
    i--;
    j--;
    suffixLength++;
  }

  return suffixLength;
}
const text = "Example text for searching";
const pattern = "search";

const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
