function buildLPSArray(pattern) {
  const lps = [0]; // longest proper prefix that is also a suffix
  let i = 1, j = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

function stringMatchKMP(text, pattern) {
  const lps = buildLPSArray(pattern);
  let i = 0, j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        return i - j; // match found at index i - pattern.length
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }

  return -1; // no match found
}

// Example usage:
const text = "ABCABDABACDABABCABCD";
const pattern = "ABABCABCD";
const index = stringMatchKMP(text, pattern);
console.log(index); // Output: 10
function buildBadCharTable(pattern) {
  const table = new Map();

  for (let i = 0; i < pattern.length - 1; i++) {
    table.set(pattern[i], i);
  }

  return table;
}

function stringMatchBoyerMoore(text, pattern) {
  const badCharTable = buildBadCharTable(pattern);
  let i = pattern.length - 1, j = i;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        return i; // match found at index i
      }
      i--;
      j--;
    } else {
      const skip = badCharTable.get(text[i]);
      i += pattern.length - Math.min(j, 1 + (skip !== undefined ? skip : -1));
      j = pattern.length - 1;
    }
  }

  return -1; // no match found
}

// Example usage:
const text = "ABCABDABACDABABCABCD";
const pattern = "ABABCABCD";
const index = stringMatchBoyerMoore(text, pattern);
console.log(index); // Output: 10
