function knuthMorrisPratt(pattern, text) {
  const lps = Array(pattern.length).fill(0);
  let length = 0;

  for (let i = 1; i < pattern.length; ) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  let i = 0;
  let j = 0;
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      return i - j;
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

// Usage example:
const pattern = "ABABAC";
const text = "ABABABABABABACABABABCDE";
console.log(knuthMorrisPratt(pattern, text)); // Output: 9
