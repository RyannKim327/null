function computeLPSArray(pattern) {
  const lps = [0];
  let len = 0; // length of the previous longest proper prefix suffix

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
function KMPSearch(text, pattern) {
  const indices = [];
  const lps = computeLPSArray(pattern);

  let i = 0; // index for `text`
  let j = 0; // index for `pattern`

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      indices.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const indices = KMPSearch(text, pattern);
console.log("Pattern found at indices:", indices);
Pattern found at indices: [10]
