function createLookupTable(pattern) {
  const table = {};
  const patternLength = pattern.length;
  
  for (let i = 0; i < patternLength - 1; i++) {
    table[pattern[i]] = patternLength - 1 - i;
  }
  
  return table;
}
function search(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const table = createLookupTable(pattern);
  
  let i = patternLength - 1;
  while (i < textLength) {
    let k = 0;
    while (k < patternLength && text[i - k] === pattern[patternLength - 1 - k]) {
      k++;
    }
    
    if (k === patternLength) {
      // Pattern found
      return i - patternLength + 1;
    } else {
      // Mismatch occurred
      const skip = table[text[i]] || patternLength; // If character not in lookup table, skip entire pattern
      i += skip;
    }
  }
  
  // Pattern not found
  return -1;
}
const text = "ABAAABCD";
const pattern = "ABC";

const index = search(text, pattern);
console.log(index); // Output: 5
