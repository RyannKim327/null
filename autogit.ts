function buildBadCharTable(pattern: string): number[] {
  const table = new Array(256).fill(-1); // ASCII size, initialize all to -1
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}

function buildGoodSuffixTable(pattern: string): number[] {
  const m = pattern.length;
  const goodSuffix = new Array(m).fill(0);
  const suffixes = new Array(m).fill(0);

  // Compute suffixes
  let f = 0,
    g = m - 1;
  suffixes[m - 1] = m;
  for (let i = m - 2; i >= 0; i--) {
    if (i > g && suffixes[i + m - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + m - 1 - f];
    } else {
      if (i < g) g = i;
      f = i;
      while (g >= 0 && pattern.charAt(g) === pattern.charAt(g + m - 1 - f)) {
        g--;
      }
      suffixes[i] = f - g;
    }
  }

  // Build good suffix table using suffixes
  for (let i = 0; i < m; i++) goodSuffix[i] = m;
  let j = 0;
  for (let i = m - 1; i >= -1; i--) {
    if (i == -1 || suffixes[i] == i + 1) {
      for (; j < m - 1 - i; j++) {
        if (goodSuffix[j] === m) {
          goodSuffix[j] = m - 1 - i;
        }
      }
    }
  }
  for (let i = 0; i <= m - 2; i++) {
    goodSuffix[m - 1 - suffixes[i]] = m - 1 - i;
  }

  return goodSuffix;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  if (m === 0) return [];

  const badChar = buildBadCharTable(pattern);
  const goodSuffix = buildGoodSuffixTable(pattern);

  const matches: number[] = [];
  let s = 0; // shift of the pattern with respect to text

  while (s <= n - m) {
    let j = m - 1;

    // Move from right to left, looking for mismatch
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      // Match found at shift s
      matches.push(s);
      s += goodSuffix[0];
    } else {
      const badCharShift = j - badChar[text.charCodeAt(s + j)];
      const goodSuffixShift = goodSuffix[j];
      s += Math.max(1, Math.max(badCharShift, goodSuffixShift));
    }
  }

  return matches;
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
const positions = boyerMooreSearch(text, pattern);
console.log("Pattern found at positions:", positions);
