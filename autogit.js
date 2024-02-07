function badCharacterHeuristic(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = i;
  }

  return table;
}

function goodSuffixHeuristic(pattern) {
  const m = pattern.length;
  const suff = new Array(m + 1).fill(0);
  const prefix = new Array(m + 1).fill(false);

  for (let i = 0; i < m; i++) {
    suff[i] = 0;
    prefix[i] = false;
  }

  let g = m - 1;
  let f = 0;

  for (let i = m - 1; i >= 0; i--) {
    if (i > g && suff[i + m - 1 - f] !== i - g) {
      suff[i] = Math.min(suff[i + m - 1 - f], i - g);
    } else {
      if (i < g) {
        g = i;
      }
      f = i;

      while (g >= 0 && pattern[g] === pattern[g + m - 1 - f]) {
        g--;
      }

      suff[i] = f - g;
    }
  }

  for (let i = 0; i < m - 1; i++) {
    suff[m - 1 - suff[i]] = i;
  }

  return { suffix: suff, prefix: prefix };
}
function boyerMooreSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  const table = badCharacterHeuristic(pattern);
  const { suffix, prefix } = goodSuffixHeuristic(pattern);

  let i = 0; // Starting index of the pattern in text

  while (i <= n - m) {
    let j = m - 1; // Index of the last character in the pattern

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found
      return i;
    } else {
      // Shift pattern based on bad character and good suffix heuristics
      const badCharacterShift = j - table[text[i + j]] || 1;
      const goodSuffixShift = suffix[j + 1] || m - prefix[j];

      i += Math.max(badCharacterShift, goodSuffixShift);
    }
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const pattern = "consectetur";

const result = boyerMooreSearch(text, pattern);
console.log(`Pattern found at index ${result}`);
