function buildPrefixTable(pattern) {
  const prefixTable = [0];
  let prefixLen = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[prefixLen]) {
      prefixLen++;
      prefixTable[i] = prefixLen;
      i++;
    } else {
      if (prefixLen !== 0) {
        prefixLen = prefixTable[prefixLen - 1];
      } else {
        prefixTable[i] = 0;
        i++;
      }
    }
  }

  return prefixTable;
}

function stringMatch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);

  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      console.log('Pattern found at index', i - j);
      j = prefixTable[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }
  }
}

// Example usage
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';
stringMatch(text, pattern);
