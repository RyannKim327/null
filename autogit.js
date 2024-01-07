function buildPrefixTable(pattern) {
  const table = [0];
  let prefixLen = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (prefixLen > 0 && pattern[i] !== pattern[prefixLen]) {
      prefixLen = table[prefixLen - 1];
    }

    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
    }

    table[i] = prefixLen;
  }

  return table;
}
function findPattern(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        return textIndex - patternIndex;
      }
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = prefixTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return -1; // Pattern not found
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = findPattern(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
