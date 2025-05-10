function buildBadCharTable(pattern: string): number[] {
  const table = new Array(256).fill(-1); // ASCII size
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}

function buildGoodSuffixTable(pattern: string): number[] {
  const m = pattern.length;
  const goodSuffix = new Array(m).fill(0);
  const borderPos = new Array(m + 1).fill(0);

  let i = m;
  let j = m + 1;
  borderPos[i] = j;

  // Preprocessing to create border positions
  while (i > 0) {
    while (j <= m && pattern[i - 1] !== pattern[j - 1]) {
      if (goodSuffix[j] === 0) goodSuffix[j] = j - i;
      j = borderPos[j];
    }
    i--;
    j--;
    borderPos[i] = j;
  }

  // Preprocessing to fill good suffix table
  j = borderPos[0];
  for (i = 0; i <= m; i++) {
    if (goodSuffix[i] === 0) goodSuffix[i] = j;
    if (i === j) j = borderPos[j];
  }

  return goodSuffix;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  if (m === 0) return [];

  const badChar = buildBadCharTable(pattern);
  const goodSuffix = buildGoodSuffixTable(pattern);

  const results: number[] = [];
  let s = 0; // shift of the pattern with respect to text

  while (s <= n - m) {
    let j = m - 1;

    // Move from right to left checking for mismatch
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      // Match found at s
      results.push(s);

      // Shift pattern so that next character in text aligns with last occurrence in pattern
      s += goodSuffix[0];
    } else {
      // Calculate shifts from both heuristics and take the max
      const badCharShift = j - badChar[text.charCodeAt(s + j)];
      const goodSuffixShift = goodSuffix[j + 1];
      s += Math.max(badCharShift, goodSuffixShift);
    }
  }

  return results;
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
const positions = boyerMooreSearch(text, pattern);
console.log("Pattern found at indices:", positions);
