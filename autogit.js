function kmpSearch(text, pattern) {
  const lps = new Array(pattern.length).fill(0);
  let i = 1;
  let j = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  const matches = [];
  i = 0;
  j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        matches.push(i - j);
        j = lps[j - 1];
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

// Example usage:
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';
const result = kmpSearch(text, pattern);
console.log(result); // Output: [10]
