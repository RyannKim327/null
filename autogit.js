function buildFailureTable(pattern) {
  const table = Array(pattern.length).fill(0);
  let prefixEnd = 0;
  let suffixStart = 1;

  while (suffixStart < pattern.length) {
    if (pattern[prefixEnd] === pattern[suffixStart]) {
      // There is a match between the prefix and suffix.
      table[suffixStart] = prefixEnd + 1;
      prefixEnd++;
      suffixStart++;
    } else if (prefixEnd > 0) {
      // Try to find a shorter prefix that matches the current suffix.
      prefixEnd = table[prefixEnd - 1];
    } else {
      // No match found, move to the next suffix position.
      table[suffixStart] = 0;
      suffixStart++;
    }
  }

  return table;
}

function searchString(text, pattern) {
  const failureTable = buildFailureTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length && patternIndex < pattern.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      // Characters match, move to the next position.
      textIndex++;
      patternIndex++;
    } else if (patternIndex > 0) {
      // Mismatch, try to find a shorter match in pattern using failure table.
      patternIndex = failureTable[patternIndex - 1];
    } else {
      // Mismatch occurred at the first character of the pattern, move to the next text position.
      textIndex++;
    }
  }

  if (patternIndex === pattern.length) {
    // Pattern found at index (textIndex - pattern.length)
    return (textIndex - pattern.length);
  }

  // Pattern not found
  return -1;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = searchString(text, pattern);
console.log(index); // Output: 10
