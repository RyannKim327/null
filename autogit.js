function computePrefix(pattern) {
  const prefix = new Array(pattern.length);
  prefix[0] = 0;
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      prefix[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = prefix[len - 1];
      } else {
        prefix[i] = 0;
        i++;
      }
    }
  }
  return prefix;
}
function kmpSearch(text, pattern) {
  const prefix = computePrefix(pattern);
  const indices = [];

  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      // Match found at index i - j
      indices.push(i - j);
      j = prefix[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = prefix[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}
const text = "ABCABCABCABCD";
const pattern = "ABC";

const indices = kmpSearch(text, pattern);
console.log("Pattern found at indices:", indices);
