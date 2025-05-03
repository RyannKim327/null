function buildBadCharTable(pattern: string): number[] {
  const table = new Array(256).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}

function buildGoodSuffixTable(pattern: string): number[] {
  const m = pattern.length;
  const goodSuffix = new Array(m).fill(0);
  const suffixes = new Array(m).fill(0);

  // Step 1: Compute suffixes array
  suffixes[m - 1] = m;
  let g = m - 1;
  let f = 0;
  for (let i = m - 2; i >= 0; i--) {
    if (i > g && suffixes[i + m - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + m - 1 - f];
    } else {
      if (i < g) g = i;
      f = i;
      while (g >= 0 && pattern[g] === pattern[g + m - 1 - f]) {
        g--;
      }
      suffixes[i] = f - g;
    }
  }

  // Step 2: Compute good suffix table
  for (let i = 0; i < m; i++) {
    goodSuffix[i] = m;
  }
  let j = 0;
  for (let i = m - 1; i >= -1; i--) {
    if (i === -1 || suffixes[i] === i + 1) {
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

function boyerMoore(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];

  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);
  const results: number[] = [];

  let s = 0; // shift of the pattern with respect to text
  const n = text.length;
  const m = pattern.length;

  while (s <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      // pattern found at shift s
      results.push(s);
      s += goodSuffixTable[0]; // Shift pattern by good suffix rule
    } else {
      const badCharShift = j - badCharTable[text.charCodeAt(s + j)];
      const goodSuffixShift = goodSuffixTable[j];
      s += Math.max(1, badCharShift, goodSuffixShift);
    }
  }

  return results;
}

// Example:
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const matches = boyerMoore(text, pattern);
console.log(matches);  // Output: [17]
