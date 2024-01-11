function computeLPSArray(pattern) {
  const m = pattern.length;
  const lps = Array(m).fill(0);
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
  return lps;
}
function KMP(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const result = [];

  const lps = computeLPSArray(pattern);

  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMP(text, pattern);

console.log("Pattern found at indices:", indices);
