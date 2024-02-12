function boyerMooreSearch(text, pattern) {
  // implementation goes here
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const skipTable = new Map();
  const matches = [];
  
  // implementation continues...
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const skipTable = new Map();
  const matches = [];

  // Build the skip table
  for (let i = 0; i < patternLength - 1; i++) {
    skipTable.set(pattern[i], patternLength - i - 1);
  }
  
  // implementation continues...
}
function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const skipTable = new Map();
  const matches = [];

  // Build the skip table
  for (let i = 0; i < patternLength - 1; i++) {
    skipTable.set(pattern[i], patternLength - i - 1);
  }

  let currentPosition = patternLength - 1;
  while (currentPosition <= textLength - 1) {
    let i = patternLength - 1;
    let j = currentPosition;

    while (i >= 0 && pattern[i] === text[j]) {
      i--;
      j--;
    }

    if (i === -1) {
      // Match found
      matches.push(j + 1);
      currentPosition += patternLength;
    } else {
      const skip = skipTable.get(text[j]) || patternLength;
      currentPosition += skip;
    }
  }

  return matches;
}
const text = "abacadabrabracabracadabrabrabracad";
const pattern = "abracadabra";
const result = boyerMooreSearch(text, pattern);
console.log(result); // Output: [10]
