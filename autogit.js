function computeLPS(pattern) {
  const lps = [0]; // Initialize LPS array with the first element as 0
  let len = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; ) {
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
function stringMatch(text, pattern) {
  const lps = computeLPS(pattern);
  const matches = [];

  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = stringMatch(text, pattern);

console.log(matches); // Output: [10]
