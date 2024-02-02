function prefixTable(pattern) {
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
function KMP(str, pattern) {
  const table = prefixTable(pattern);
  let strIndex = 0;
  let patternIndex = 0;

  while (strIndex < str.length) {
    if (str[strIndex] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        return strIndex - pattern.length + 1;
      }

      patternIndex++;
      strIndex++;
    } else if (patternIndex > 0) {
      patternIndex = table[patternIndex - 1];
    } else {
      strIndex++;
    }
  }

  return -1;
}
const inputStr = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const result = KMP(inputStr, pattern);
console.log(result); // Output: 10
