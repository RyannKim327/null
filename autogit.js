function buildPrefixArray(pattern) {
  const prefixArray = Array(pattern.length).fill(0);
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixArray[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = prefixArray[prefixLength - 1];
      } else {
        prefixArray[i] = 0;
        i++;
      }
    }
  }

  return prefixArray;
}
function kmpSearch(text, pattern) {
  const prefixArray = buildPrefixArray(pattern);
  const result = [];
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;
    }

    if (patternIndex === pattern.length) {
      result.push(textIndex - patternIndex);
      patternIndex = prefixArray[patternIndex - 1];
    } else if (
      textIndex < text.length &&
      pattern[patternIndex] !== text[textIndex]
    ) {
      if (patternIndex !== 0) {
        patternIndex = prefixArray[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = kmpSearch(text, pattern);

if (matches.length > 0) {
  console.log("Pattern found at indexes:", matches);
} else {
  console.log("Pattern not found.");
}
