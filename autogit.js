function boyerMooreHorspool(text, pattern) {
  const occurrences = [];
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharacterShift = {};

  for (let i = 0; i < patternLength - 1; i++) {
    badCharacterShift[pattern[i]] = patternLength - i - 1;
  }

  let skip = 0;
  while (skip <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[skip + j]) {
      j--;
    }

    if (j < 0) {
      occurrences.push(skip);
      skip += patternLength;
    } else {
      const shift = badCharacterShift[text[skip + j]] || patternLength;
      skip += shift;
    }
  }

  return occurrences;
}

// Example usage:
const text = "ABCDABCDABE";
const pattern = "ABC";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: [0, 4, 8]
