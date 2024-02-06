function computeLPS(pattern) {
  const len = pattern.length;
  const lps = new Array(len).fill(0);

  let i = 1;
  let j = 0;

  while (i < len) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function stringMatch(text, pattern) {
  const tLen = text.length;
  const pLen = pattern.length;
  const lps = computeLPS(pattern);

  let i = 0;
  let j = 0;

  while (i < tLen) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pLen) {
        console.log('Pattern found at index', i - j);
        j = lps[j - 1];
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';

stringMatch(text, pattern);
