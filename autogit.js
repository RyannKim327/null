function computeLPSArray(pattern) {
  let lps = Array(pattern.length).fill(0);
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
  let lps = computeLPSArray(pattern);
  let i = 0;
  let j = 0;
  let matches = [];

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

// Example usage:
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let matches = KMP(text, pattern);

if (matches.length > 0) {
  console.log(`Pattern found at index ${matches}`);
} else {
  console.log("Pattern not found");
}
