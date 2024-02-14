function buildPrefixTable(pattern) {
  const table = Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      table[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = table[length - 1];
      } else {
        table[i] = 0;
        i++;
      }
    }
  }

  return table;
}

function KMP(text, pattern) {
  const result = [];

  if (!text || !pattern) {
    return result;
  }

  const table = buildPrefixTable(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j);
      j = table[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMP(text, pattern);
console.log(indices); // Output: [10]
