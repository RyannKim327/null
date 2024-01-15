// Function to compute the failure table
function computeFailureTable(pattern) {
  const patternLength = pattern.length;
  const table = new Array(patternLength);

  let i = 0;
  let j = -1;
  table[0] = -1;

  while (i < patternLength - 1) {
    while (j >= 0 && pattern[i] !== pattern[j]) {
      j = table[j];
    }
    i++;
    j++;
    table[i] = j;
  }

  return table;
}

// Function to search for pattern occurrences in text using the failure table
function search(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const table = computeFailureTable(pattern);

  let i = 0;
  let j = 0;

  while (i < textLength) {
    while (j >= 0 && text[i] !== pattern[j]) {
      j = table[j];
    }
    i++;
    j++;
    
    if (j === patternLength) {
      console.log(`Pattern found at index ${i - j}`);
      j = table[j];
    }
  }
}

// Example usage
const text = "AABAACAADAABAAABAA";
const pattern = "AABA";
search(text, pattern);
