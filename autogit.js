function buildPrefixTable(pattern) {
  const prefixTable = Array(pattern.length).fill(0);
  let j = 0;

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      prefixTable[i] = j + 1;
      j++;
    } else {
      if (j !== 0) {
        j = prefixTable[j - 1];
        i--;
      }
    }
  }

  return prefixTable;
}

function stringMatch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const prefixTable = buildPrefixTable(pattern);
  let i = 0;
  let j = 0;

  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = prefixTable[j - 1];
      } else {
        i++;
      }
    }

    if (j === m) {
      // Match found at index i - m
      console.log('Match found at index', i - m);
      j = prefixTable[j - 1];
    }
  }
}

// Example usage:
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';

stringMatch(text, pattern);
