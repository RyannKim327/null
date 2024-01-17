function buildBadMatchTable(pattern) {
  const table = {};
  const patternLength = pattern.length;
  
  for (let i = 0; i < patternLength - 1; i++) {
    const char = pattern[i];
    const shift = patternLength - 1 - i;
    table[char] = shift;
  }
  
  return table;
}
function boyerMooreHorspool(text, pattern) {
  const result = [];
  const textLength = text.length;
  const patternLength = pattern.length;
  
  if (patternLength > textLength) {
    return result;
  }
  
  const badMatchTable = buildBadMatchTable(pattern);
  let i = 0;
  
  while (i <= textLength - patternLength) {
    let j = patternLength - 1;
    
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }
    
    if (j < 0) {
      result.push(i);
      i += 1; // Slide the window by 1
    } else {
      const mismatchedChar = text[i + j];
      const shift = badMatchTable[mismatchedChar] || patternLength;
      i += shift;
    }
  }
  
  return result;
}
