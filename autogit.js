function createBadMatchTable(pattern) {
  const table = {};
  const patternLength = pattern.length;
  
  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - i - 1;
  }
  
  return table;
}

function boyerMooreHorspool(text, pattern) {
  const badMatchTable = createBadMatchTable(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  let i = patternLength - 1;
  
  while (i < textLength) {
    let j = patternLength - 1;
    
    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }
    
    if (j < 0) {
      return i + 1; // Match found
    } else {
      const badMatchChar = text[i];
      const shift = badMatchTable[badMatchChar] || patternLength;
      i += shift;
    }
  }
  
  return -1; // Match not found
}

// Example usage
const text = 'Hello, World!';
const pattern = 'World';
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
