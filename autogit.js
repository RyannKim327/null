function KMPSearch(string, pattern) {
  const n = string.length;
  const m = pattern.length;

  const lps = new Array(m).fill(0);
  let j = 0;

  computeLPSArray(pattern, m, lps);

  let i = 0;
  while (i < n) {
    if (string[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      console.log('Pattern found at index', i - j);
      j = lps[j - 1];
    } else if (i < n && string[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}

function computeLPSArray(pattern, m, lps) {
  let len = 0;
  let i = 1;
  lps[0] = 0;

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
}
