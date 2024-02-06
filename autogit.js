function computeLPSArray(pattern) {
  const lps = [0];
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
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
  return lps;
}

function KMPSearch(string, pattern) {
  const n = string.length;
  const m = pattern.length;

  const lps = computeLPSArray(pattern);

  let i = 0;
  let j = 0;
  const indices = [];

  while (i < n) {
    if (pattern[j] === string[i]) {
      i++;
      j++;
    }

    if (j === m) {
      indices.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== string[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}

// Example usage:
const string = "ABCABDABCABCA";
const pattern = "ABC";
const indices = KMPSearch(string, pattern);
console.log("Pattern found at indices:", indices);
