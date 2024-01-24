function KMPSearch(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;

  // Preprocess the pattern
  const lps = new Array(patternLength).fill(0);
  let len = 0;
  let i = 1;

  while (i < patternLength) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  // Perform the string matching
  let j = 0;
  let i = 0;

  while (i < textLength) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === patternLength) {
      console.log("Pattern found at index", i - j);
      j = lps[j - 1];
    } else if (i < textLength && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
KMPSearch(pattern, text);
