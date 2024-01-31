function buildPrefixTable(pattern) {
  const prefixTable = Array(pattern.length).fill(0);
  let prefixIndex = 0;
  
  for (let i = 1; i < pattern.length;) {
    if (pattern[i] === pattern[prefixIndex]) {
      prefixIndex++;
      prefixTable[i] = prefixIndex;
      i++;
    } else {
      if (prefixIndex !== 0) {
        prefixIndex = prefixTable[prefixIndex - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}
function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = [];
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;

      if (patternIndex === pattern.length) {
        matches.push(textIndex - pattern.length);
        patternIndex = prefixTable[patternIndex - 1];
      }
    } else if (patternIndex !== 0) {
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
