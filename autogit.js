function preprocessPattern(pattern) {
  const m = pattern.length;
  const badChar = new Array(256).fill(-1);
  const suffix = new Array(m).fill(-1);

  for (let i = 0; i < m; i++) {
    const charCode = pattern.charCodeAt(i);
    badChar[charCode] = i;
    
    let j = i;
    let k = 0;
    while (j >= 0 && pattern[j] === pattern[m - 1 - k]) {
      suffix[k] = j;
      j--;
      k++;
    }
  }

  return { badChar, suffix };
}

function boyerMoore(text, pattern) {
  const { badChar, suffix } = preprocessPattern(pattern);
  const n = text.length;
  const m = pattern.length;
  let i = 0;

  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      return i;
    }

    const badCharShift = j - badChar[text.charCodeAt(i + j)];
    const suffixShift = j < m - 1 ? suffix[j + 1] : 0;
    const shift = Math.max(badCharShift, suffixShift);
    i += shift;
  }

  return -1; // No match found
}

// Example usage:
const text = "This is a test string";
const pattern = "test";

const matchIndex = boyerMoore(text, pattern);
if (matchIndex !== -1) {
  console.log(`Pattern found at index ${matchIndex}`);
} else {
  console.log(`Pattern not found`);
}
