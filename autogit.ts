function buildBadCharTable(pattern: string): number[] {
  const table = new Array(256).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}

function buildSuffixes(pattern: string): number[] {
  const m = pattern.length;
  const suffixes = new Array(m).fill(0);
  let f = 0;
  let g = m - 1;

  suffixes[m - 1] = m;
  for (let i = m - 2; i >= 0; i--) {
    if (i > g && suffixes[i + m - 1 - f] < i - g) {
      suffixes[i] = suffixes[i + m - 1 - f];
    } else {
      g = i;
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
  const goodSuffix = new Array(m).fill(m);
  const suffixes = buildSuffixes(pattern);

  for (let i = m - 1; i >= 0; i--) {
    if (suffixes[i] === i + 1) {
      for (let j = 0; j < m - 1 - i; j++) {
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

  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);

  const result: number[] = [];
  let s = 0; // shift of the pattern with respect to text

  while (s <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      result.push(s);
      s += goodSuffixTable[0];
    } else {
      const badCharShift = j - badCharTable[text.charCodeAt(s + j)];
      const goodSuffixShift = goodSuffixTable[j];
      s += Math.max(1, badCharShift, goodSuffixShift);
    }
  }

  return result;
}

// Example usage:
const text = "abacaabadcabacabaabb";
const pattern = "abacab";
const indices = boyerMooreSearch(text, pattern);
console.log(indices); // Output: [10]
