function buildPrefixTable(pattern) {
  const table = [0];
  let prefixLength = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (prefixLength > 0 && pattern[i] !== pattern[prefixLength]) {
      prefixLength = table[prefixLength - 1];
    }
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
    }
    table[i] = prefixLength;
  }

  return table;
}
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        matches.push(textIndex - pattern.length + 1);
        patternIndex = prefixTable[patternIndex];
      } else {
        textIndex++;
        patternIndex++;
      }
    } else if (patternIndex > 0) {
      patternIndex = prefixTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [10]
