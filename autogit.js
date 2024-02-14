function boyerMooreHorspool(text, pattern) {
  const badMatchTable = {};
  
  // Calculate bad character shift values
  for (let i = 0; i < pattern.length - 1; i++) {
    badMatchTable[pattern[i]] = pattern.length - 1 - i;
  }
}
let textIndex = pattern.length - 1;
let patternIndex = pattern.length - 1;
while (textIndex < text.length) {
  if (text[textIndex] === pattern[patternIndex]) {
    if (patternIndex === 0) {
      // Pattern found starting at textIndex
      return textIndex;
    }
    textIndex--;
    patternIndex--;
  } else {
    const badMatchShift = badMatchTable[text[textIndex]] || pattern.length;
    textIndex += Math.max(1, badMatchShift);
    patternIndex = pattern.length - 1;
  }
}
return -1;
function boyerMooreHorspool(text, pattern) {
  const badMatchTable = {};

  // Calculate bad character shift values
  for (let i = 0; i < pattern.length - 1; i++) {
    badMatchTable[pattern[i]] = pattern.length - 1 - i;
  }

  let textIndex = pattern.length - 1;
  let patternIndex = pattern.length - 1;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      if (patternIndex === 0) {
        // Pattern found starting at textIndex
        return textIndex;
      }
      textIndex--;
      patternIndex--;
    } else {
      const badMatchShift = badMatchTable[text[textIndex]] || pattern.length;
      textIndex += Math.max(1, badMatchShift);
      patternIndex = pattern.length - 1;
    }
  }

  return -1;
}
const text = "This is a sample text.";
const pattern = "sample";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 10 (index of the pattern in the text)
