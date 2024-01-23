function kmpSearch(text, pattern) {
  const lps = computeLPS(pattern);
  let i = 0, j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      return i - j; // Match found at index i - j
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1; // No match found
}

function computeLPS(pattern) {
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

// Example usage
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const matchIndex = kmpSearch(text, pattern);
console.log(matchIndex); // Output: 10
