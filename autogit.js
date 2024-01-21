function boyerMooreHorspool(text, pattern) {
  const badMatchTable = Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    const charCode = pattern.charCodeAt(i);
    const shift = pattern.length - i - 1;
    badMatchTable[charCode] = shift;
  }

  const textLength = text.length;
  const patternLength = pattern.length;
  let index = 0;

  while (index <= textLength - patternLength) {
    let patternIndex = patternLength - 1;

    while (patternIndex >= 0 && pattern[patternIndex] === text[index + patternIndex]) {
      patternIndex--;
    }

    if (patternIndex === -1) {
      return index;
    }

    const charCode = text.charCodeAt(index + patternLength - 1);
    index += badMatchTable[charCode];
  }

  return -1;
}

// Example usage:
const text = 'Lorem ipsum dolor sit amet';
const pattern = 'ipsum';
const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 6
