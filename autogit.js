function stringMatchingKMP(text, pattern) {
  const prefix = [];
  prefix[0] = 0;
  let i = 1, j = 0;
  
  // Calculate the prefix function
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      prefix[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        prefix[i] = 0;
        i++;
      }
    }
  }
  
  const matches = [];
  i = 0;
  j = 0;
  
  // Match the pattern against the text
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      
      if (j === pattern.length) {
        matches.push(i - j);
        j = prefix[j - 1];
      }
    } else {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = stringMatchingKMP(text, pattern);
console.log(matches); // Output: [10]
