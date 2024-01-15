function generateBadCharTable(pattern) {
  const table = {};
  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = i;
  }
  table[pattern[pattern.length - 1]] = -1;
  return table;
}

function boyerMooreSearch(text, pattern) {
  const badCharTable = generateBadCharTable(pattern);
  let textIndex = 0;

  while (textIndex <= text.length - pattern.length) {
    let patternIndex = pattern.length - 1;

    while (patternIndex >= 0 && pattern[patternIndex] === text[textIndex + patternIndex]) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return textIndex; // Pattern found
    }

    const badChar = text[textIndex + patternIndex];
    const maxShift = badCharTable[badChar] || -1;
    textIndex += Math.max(1, patternIndex - maxShift);
  }

  return -1; // Pattern not found
}

// Example usage:
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'ipsum';
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
