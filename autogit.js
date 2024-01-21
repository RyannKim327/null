function buildLPSArray(pattern) {
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

function stringMatch(mainString, pattern) {
  const lps = buildLPSArray(pattern);
  let i = 0;
  let j = 0;

  while (i < mainString.length) {
    if (mainString[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      console.log("Pattern found at index", i - j);
      j = lps[j - 1];
    } else if (i < mainString.length && mainString[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}

// Example usage:
const mainString = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
stringMatch(mainString, pattern);
