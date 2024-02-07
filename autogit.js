function KMP(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = new Array(m).fill(0);

  // Preprocessing
  let len = 0; // Length of the previous longest prefix suffix
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

  // Matching
  let j = 0; // Index in pattern
  let i = 0; // Index in text
  const matches = [];
  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < n && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}
