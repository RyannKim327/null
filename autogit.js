function buildPrefixSuffixTable(pattern) {
  const table = [0]; // The first entry is always 0
  let prefixLength = 0; // Length of the longest proper prefix

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      table[i] = prefixLength;
    } else {
      if (prefixLength > 0) {
        // Try to find a shorter prefix
        prefixLength = table[prefixLength - 1];
        i--; // Keep the same i for the next iteration
      } else {
        table[i] = 0;
      }
    }
  }

  return table;
}
function knuthMorrisPratt(text, pattern) {
  const table = buildPrefixSuffixTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        // Found a match
        return textIndex - patternIndex;
      }

      patternIndex++;
      textIndex++;
    } else {
      if (patternIndex > 0) {
        // Try to find a shorter matching prefix
        patternIndex = table[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return -1; // No match found
}
const text = "ABCABDABABCABCDABDE";
const pattern = "ABCABCD";

const index = knuthMorrisPratt(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log(`Pattern not found`);
}
