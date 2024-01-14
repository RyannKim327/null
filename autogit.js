function boyerMooreHorspool(text, pattern) {
  const last = {};
  const patternLength = pattern.length;
  const textLength = text.length;

  // Preprocessing: Build the "last" dictionary for skips
  for (let i = 0; i < patternLength - 1; i++) {
    last[pattern[i]] = patternLength - 1 - i;
  }

  // Search for the pattern in the text
  let i = patternLength - 1;

  while (i < textLength) {
    let j = patternLength - 1;
    let k = i;

    // Compare characters from right to left
    while (j >= 0 && text[k] === pattern[j]) {
      j--;
      k--;
    }

    if (j === -1) {
      // Pattern found, return the starting index
      return k + 1;
    }

    // Skip based on the last dictionary
    const skip = last[text[i]] || patternLength;
    i += skip;
  }

  // Pattern not found
  return -1;
}
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
const pattern = 'sit amet';

const index = boyerMooreHorspool(text, pattern);

if (index === -1) {
  console.log('Pattern not found');
} else {
  console.log(`Pattern found at index ${index}`);
}
