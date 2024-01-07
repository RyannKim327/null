function buildPatternTable(pattern) {
  const table = new Array(pattern.length);
  let i = 0;
  let j = -1;
  table[0] = -1;

  while (i < pattern.length) {
    while (j >= 0 && pattern[i] !== pattern[j]) {
      j = table[j];
    }
    i++;
    j++;
    table[i] = j;
  }

  return table;
}

function stringMatch(text, pattern) {
  if (pattern.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let patternIndex = 0;
  const patternTable = buildPatternTable(pattern);

  while (textIndex < text.length) {
    while (patternIndex >= 0 && text[textIndex] !== pattern[patternIndex]) {
      patternIndex = patternTable[patternIndex];
    }
    textIndex++;
    patternIndex++;

    if (patternIndex === pattern.length) {
      return textIndex - pattern.length;
    }
  }

  return -1;
}
const text = "Hello, world!";
const pattern = "world";
const index = stringMatch(text, pattern);

console.log(index); // Output: 7
