function preprocessBadCharacter(pattern, patternLength) {
  const badCharacter = {};
  for (let i = 0; i < patternLength; i++) {
    badCharacter[pattern[i]] = i;
  }
  return badCharacter;
}

function preprocessGoodSuffix(pattern, patternLength) {
  const suffixTable = Array(patternLength + 1).fill(0);
  let i = patternLength, j = patternLength + 1;
  suffixTable[patternLength] = j;
  
  while (i > 0) {
    while (j <= patternLength && pattern[i - 1] !== pattern[j - 1]) {
      if (suffixTable[j] === 0) {
        suffixTable[j] = j - i;
      }
      j = suffixTable[j];
    }
    i--;
    j--;
    suffixTable[j] = i;
  }
  
  return suffixTable;
}

function generateBadCharacterTable(pattern) {
  const patternLength = pattern.length;
  return preprocessBadCharacter(pattern, patternLength);
}

function generateGoodSuffixTable(pattern) {
  const patternLength = pattern.length;
  return preprocessGoodSuffix(pattern, patternLength);
}

function boyerMooreSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const badCharacter = generateBadCharacterTable(pattern);
  const suffixTable = generateGoodSuffixTable(pattern);
  let shift = 0;

  let i = 0;
  while (i <= textLength - patternLength) {
    let j = patternLength - 1;
    
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // Match found at index i
      console.log("Match found at index", i);
      // Do whatever you want with this information
    }

    const badCharShift = j >= 0 ? Math.max(1, j - badCharacter[text[i + j]] || 0) : 1;
    const goodSuffixShift = suffixTable[j + 1];

    shift = Math.max(badCharShift, goodSuffixShift);
    i += shift;
  }
}

// Example usage
const text = "ABCDABCAABCDABC";
const pattern = "ABCDABC";
boyerMooreSearch(text, pattern);
