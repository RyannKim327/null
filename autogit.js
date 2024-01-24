function generateLPS(pattern) {
  const lps = [0]; // lps[0] is always 0
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
function KMP(text, pattern) {
  const lps = generateLPS(pattern);

  let i = 0; // index for text
  let j = 0; // index for pattern

  const indexes = [];

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      indexes.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return indexes;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const indexes = KMP(text, pattern);
console.log(indexes); // Output: [10]
