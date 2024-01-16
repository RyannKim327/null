function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let i = 0, j = 1;

  while (j < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i !== 0) {
        i = lps[i - 1];
      } else {
        lps[j] = 0;
        j++;
      }
    }
  }

  return lps;
}

function stringMatch(text, pattern) {
  const lps = buildLPS(pattern);
  let i = 0, j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      console.log('Match found at index', i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}

// Example usage
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';
stringMatch(text, pattern);
