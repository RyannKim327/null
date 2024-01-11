function boyerMooreHorspool(text, pattern) {
  const patternLength = pattern.length;
  const shiftTable = buildShiftTable(pattern);

  let i = 0;
  while (i <= text.length - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      return i; // Match found at index i
    }
    
    // Calculate the shift value for the last character of the current substring
    const shift = shiftTable[text.charCodeAt(i + patternLength - 1)];
    i += shift || patternLength; // Shift the index by the calculated shift value
  }

  return -1; // Pattern not found
}

function buildShiftTable(pattern) {
  const shiftTable = {};
  const patternLength = pattern.length;

  for (let i = 0; i < patternLength - 1; i++) {
    shiftTable[pattern.charCodeAt(i)] = patternLength - i - 1;
  }
  
  return shiftTable;
}
