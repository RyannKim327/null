function failureFunction(pattern) {
  const table = [0];
  let prefix = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefix]) {
      prefix++;
    } else {
      prefix = 0;
    }
    table[i] = prefix;
  }

  return table;
}
function KMP(text, pattern) {
  const failure = failureFunction(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;

      if (patternIndex === pattern.length) {
        return textIndex - patternIndex; // Match found at this index
      }
    } else if (patternIndex > 0) {
      patternIndex = failure[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return -1; // No match found
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = KMP(text, pattern);
console.log(index);
