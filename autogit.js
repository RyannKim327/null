function createPrefixTable(pattern) {
  const prefixTable = Array(pattern.length).fill(0);
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixTable[i] = prefixLength + 1;
      prefixLength++;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = prefixTable[prefixLength - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = createPrefixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;
  const matches = [];

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;
    }

    if (patternIndex === pattern.length) {
      matches.push(textIndex - patternIndex);
      patternIndex = prefixTable[patternIndex - 1];
    } else if (
      textIndex < text.length &&
      pattern[patternIndex] !== text[textIndex]
    ) {
      if (patternIndex !== 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);

console.log("Pattern found at positions:", matches);
