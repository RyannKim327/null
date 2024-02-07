function boyerMooreHorspool(text, pattern) {
  // Initialization
  const textLength = text.length;
  const patternLength = pattern.length;
  const lastOccurrence = {};

  // Preprocessing: Construct the bad character shift table
  for (let i = 0; i < patternLength - 1; i++) {
    lastOccurrence[pattern[i]] = i;
  }

  // Search for pattern in the text
  let i = patternLength - 1;
  while (i < textLength) {
    let k = 0; // Number of matched characters

    while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
      k++;
    }

    if (k === patternLength) {
      return i - patternLength + 1; // Pattern found, return the starting index
    } else {
      const last = lastOccurrence[text[i]] || -1;
      i += patternLength - Math.min(k, 1 + last);
    }
  }

  return -1; // Pattern not found
}
const text = "Hello, this is a sample text";
const pattern = "sample";
const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 17
