function kmpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  const lps = Array(patternLength).fill(0);
  computeLPSArray(pattern, lps);

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < textLength) {
    if (pattern[patternIndex] === text[textIndex]) {
      textIndex++;
      patternIndex++;

      if (patternIndex === patternLength) {
        return textIndex - patternIndex;
      }
    } else if (patternIndex !== 0) {
      patternIndex = lps[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return -1;
}

function computeLPSArray(pattern, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";

const index = kmpSearch(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
