function constructFailureTable(pattern) {
  const table = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      table[suffixIndex] = prefixIndex + 1;
      prefixIndex++;
      suffixIndex++;
    } else if (prefixIndex === 0) {
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}
function search(text, pattern) {
  const failureTable = constructFailureTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        // Match found!
        return textIndex - pattern.length + 1;
      }
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = failureTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  // No match found
  return -1;
}
const text = "ABCABBABCABCABD";
const pattern = "ABCABD";
const result = search(text, pattern);

console.log(result); // Output: 10 (index of the first occurrence of the pattern in the text)
