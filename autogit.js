function computeLPSArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let len = 0, i = 1;

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
function KMPSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  let i = 0, j = 0;
  const n = text.length, m = pattern.length;
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
const text = "ABABAABABABA";
const pattern = "ABA";
const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [0, 2, 4, 9]
