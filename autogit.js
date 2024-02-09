function boyerMooreHorspool(text, pattern) {
  const skipTable = {};

  function generateSkipTable(pattern) {
    for (let i = 0; i < pattern.length - 1; i++) {
      skipTable[pattern[i]] = pattern.length - 1 - i;
    }
  }

  generateSkipTable(pattern);

  const textLength = text.length;
  const patternLength = pattern.length;

  let currentIndex = 0;

  while (currentIndex <= textLength - patternLength) {
    let backwardIndex = patternLength - 1;
    while (backwardIndex >= 0 && text[currentIndex + backwardIndex] === pattern[backwardIndex]) {
      backwardIndex--;
    }

    if (backwardIndex === -1) {
      // Match found!
      // Handle the case as desired (e.g., return currentIndex or store the matches)
    } else {
      const skipDistance = skipTable[text[currentIndex + patternLength - 1]] || patternLength;
      currentIndex += skipDistance;
    }
  }

  // No match found
  // Handle the case as desired (e.g., return -1 or an empty array)
}
