function computeLPSArray(pattern) {
  const lps = [0]; // Longest proper prefix matching suffix array
  let len = 0; // Length of the previous longest prefix suffix

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

function stringMatch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = computeLPSArray(pattern);

  let i = 0; // Index for text[]
  let j = 0; // Index for pattern[]

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      console.log(`Pattern found at index ${i - j}`);
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0)
        j = lps[j - 1];
      else
        i++;
    }
  }
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";

stringMatch(text, pattern);
Pattern found at index 11
Pattern found at index 18
