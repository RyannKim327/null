function buildFailureTable(pattern) {
  const table = new Array(pattern.length);
  let prefixIndex = 0, suffixIndex = 1;

  table[0] = 0;

  while (suffixIndex < pattern.length) {
    if (pattern[suffixIndex] === pattern[prefixIndex]) {
      table[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}

function stringMatch(text, pattern) {
  const failureTable = buildFailureTable(pattern);
  let textIndex = 0, patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1)
        return true; // Match found

      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      patternIndex = failureTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return false; // No match found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

console.log(stringMatch(text, pattern)); // Output: true
