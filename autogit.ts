function buildBadCharTable(pattern: string): number[] {
  const ALPHABET_SIZE = 256; // ASCII charset size
  const badCharTable = new Array(ALPHABET_SIZE).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    badCharTable[pattern.charCodeAt(i)] = i;
  }
  return badCharTable;
}

function buildSuffixes(pattern: string): number[] {
  const m = pattern.length;
  const suffixes = new Array(m).fill(0);
  suffixes[m - 1] = m;
  let g = m - 1;
  let f = 0;
  for (let i = m - 2; i >= 0; i--) {
    if (i > g && suffixes[i + m - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + m - 1 - f];
    } else {
      if (i < g) {
        g = i;
      }
      f = i;
      while (g >= 0 && pattern[g] === pattern[g + m - 1 - f]) {
        g--;
      }
      suffixes[i] = f - g;
    }
  }
  return suffixes;
}

function buildGoodSuffixTable(pattern: string): number[] {
  const m = pattern.length;
  const goodSuffixTable = new Array(m).fill(m);
  const suffixes = buildSuffixes(pattern);

  for (let i = m - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (let j = 0; j < m - 1 - i; j++) {
        if (goodSuffixTable[j] === m) {
          goodSuffixTable[j] = m - 1 - i;
        }
      }
    }
  }
  for (let i = 0; i <= m - 2; i++) {
    goodSuffixTable[m - 1 - suffixes[i]] = m - 1 - i;
  }
  return goodSuffixTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
  const n = text.length;
  const m = pattern.length;
  if (m === 0) return [];

  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);
  const matches: number[] = [];

  let s = 0; // shift of the pattern with respect to text
  while (s <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }
    if (j < 0) {
      matches.push(s);
      s += goodSuffixTable[0];
    } else {
      const badCharShift = j - badCharTable[text.charCodeAt(s + j)];
      const goodSuffixShift = goodSuffixTable[j];
      s += Math.max(1, badCharShift, goodSuffixShift);
    }
  }
  return matches;
}

// Example usage:
const text = "ABAAABCD";
const pattern = "ABC";
const positions = boyerMooreSearch(text, pattern);
console.log(positions);  // Output: [4]
