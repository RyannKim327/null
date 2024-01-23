function searchPattern(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  // Preprocess the pattern
  const lps = new Array(m).fill(0);
  let len = 0;
  let i = 1;

  while (i < m) {
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

  // Search for the pattern
  let j = 0;
  let i = 0;

  while (i < n) {
    if (pattern[j] === text[i]) {
      j++;
      i++;

      if (j === m) {
        console.log("Pattern found at index", i - j);
        j = lps[j - 1];
      }
    } else if (j !== 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
}
