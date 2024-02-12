function buildPrefixTable(pattern) {
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
function search(text, pattern) {
  const result = [];
  const prefixTable = buildPrefixTable(pattern);

  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex++;
      textIndex++;
    }

    if (patternIndex === pattern.length) {
      result.push(textIndex - patternIndex);
      patternIndex = prefixTable[patternIndex - 1];
    } else if (
      textIndex < text.length &&
      pattern[patternIndex] !== text[textIndex]
    ) {
      if (patternIndex !== 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return result;
}
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';

const indices = search(text, pattern);

if (indices.length > 0) {
  console.log(`Pattern found at index ${indices.join(', ')}`);
} else {
  console.log('Pattern not found');
}
Pattern found at index 10
