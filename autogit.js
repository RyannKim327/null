function computeLPSArray(pattern) {
  const lps = [0]; // initialize the lps array with 0

  let len = 0; // length of the previous longest prefix suffix
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
function kmpSearch(text, pattern) {
  const lps = computeLPSArray(pattern);

  let i = 0; // index for text[]
  let j = 0; // index for pattern[]

  const results = [];

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      // pattern found at index i-j
      results.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      // mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return results;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const indices = kmpSearch(text, pattern);
console.log("Pattern found at indices:", indices); // Output: Pattern found at indices: [10]
