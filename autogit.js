function stringMatch(text, pattern) {
  const m = pattern.length;
  const n = text.length;
  const lps = new Array(m).fill(0);

  // Construct the lps array
  let j = 0;
  let i = 1;
  while (i < m) {
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

  // Perform the string matching algorithm
  i = 0;
  j = 0;
  const result = [];

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      // Found a match
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = stringMatch(text, pattern);
console.log(matches); // Output: [10]
