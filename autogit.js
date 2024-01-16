function buildPatternTable(pattern) {
  const table = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < pattern.length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      table[suffixIndex] = prefixIndex + 1;
      suffixIndex++;
      prefixIndex++;
    } else if (prefixIndex === 0) {
      table[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = table[prefixIndex - 1];
    }
  }

  return table;
}
function kmpSearch(text, pattern) {
  if (pattern.length === 0) {
    return 0;
  }

  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        return textIndex - pattern.length + 1;
      }

      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return -1;
}
const text = "Hello world, hello!";
const pattern = "hello";

const index = kmpSearch(text.toLowerCase(), pattern.toLowerCase());

if (index === -1) {
  console.log(`Pattern "${pattern}" not found in the text.`);
} else {
  console.log(`Pattern "${pattern}" found at index ${index}.`);
}
Pattern "hello" found at index 13.
