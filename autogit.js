function buildPatternTable(pattern) {
  const table = [0];
  let prefixLength = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      table[i] = prefixLength;
      i++;
    } else {
      if (prefixLength !== 0) {
        prefixLength = table[prefixLength - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }

  return table;
}

function kmpSearch(text, pattern) {
  const patternTable = buildPatternTable(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return i - j;
      }
      i++;
      j++;
    } else {
      if (j > 0) {
        j = patternTable[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

// Example usage
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';

const index = kmpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
