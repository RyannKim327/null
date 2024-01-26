function computeLPSArray(pattern) {
  const lps = Array(pattern.length).fill(0);
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
  const matches = [];
  const m = pattern.length;
  const n = text.length;
  let i = 0, j = 0;

  const lps = computeLPSArray(pattern);

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [10]
