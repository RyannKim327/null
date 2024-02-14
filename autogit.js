function boyerMooreHorspool(text, pattern) {
  const badMatchTable = {};
  const patternLength = pattern.length;

  // Creating the bad character shift table
  for (let i = 0; i < patternLength - 1; i++) {
    badMatchTable[pattern[i]] = patternLength - 1 - i;
  }

  const textLength = text.length;
  let currentIndex = 0;

  while (currentIndex <= textLength - patternLength) {
    let shift = 0;
    let match = true;

    // Matching pattern from right to left
    for (let i = patternLength - 1; i >= 0; i--) {
      if (pattern[i] !== text[currentIndex + i]) {
        // Calculate the bad character shift
        const badMatchShift = badMatchTable[text[currentIndex + i]];

        // If character not in table, shift by pattern length
        shift = badMatchShift !== undefined ? badMatchShift : patternLength;
        match = false;
        break;
      }
    }

    if (match) {
      // Handle the match (e.g., print or store the index)
      console.log("Pattern found at index:", currentIndex);
    }

    currentIndex += shift;
  }
}

// Example usage
const text = "Lorem ipsum dolor sit amet";
const pattern = "sit";

boyerMooreHorspool(text, pattern);
