function buildBadMatchTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - i - 1;
  }

  return table;
}

function boyerMooreSearch(text, pattern) {
  const badMatchTable = buildBadMatchTable(pattern);
  let i = pattern.length - 1; // Index in text
  let j = pattern.length - 1; // Index in pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        return i; // Match found
      } else {
        i--;
        j--;
      }
    } else {
      const skip = badMatchTable[text[i]] || pattern.length;
      i += skip;
      j = pattern.length - 1;
    }
  }

  return -1; // No match found
}

// Usage example:
const text = "ABAAABCDBBABCDDEBCABC";
const pattern = "ABC";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Match found at index ${index}`);
} else {
  console.log("No match found");
}
