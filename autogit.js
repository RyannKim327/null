function computeLPSArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let i = 1, j = 0;

  while (i < pattern.length) {
    if (pattern.charAt(i) === pattern.charAt(j)) {
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
  return lps;
}

function KMPSearch(text, pattern) {
  const indices = [];
  const lps = computeLPSArray(pattern);
  let i = 0, j = 0;
  const n = text.length, m = pattern.length;

  while (i < n) {
    if (text.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;

      if (j === m) {
        indices.push(i - j);
        j = lps[j - 1];
      }
    } else if (j !== 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return indices;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMPSearch(text, pattern);
console.log(`Pattern found at indices: ${indices}`);
