function buildLPS(pattern) {
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

function KMPSearch(text, pattern) {
  const lps = buildLPS(pattern);
  const results = [];
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      results.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return results;
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [10]
