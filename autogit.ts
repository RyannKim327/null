function buildBadCharTable(pattern: string): number[] {
  const table = new Array(256).fill(-1); // assuming ASCII charset
  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }
  return table;
}
function buildGoodSuffixTables(pattern: string): { suffix: number[]; prefix: boolean[] } {
  const m = pattern.length;
  const suffix = new Array(m).fill(-1);
  const prefix = new Array(m).fill(false);
  
  for (let i = 0; i < m - 1; i++) {
    let j = i;
    let k = 0; // length of matching suffix
    
    while (j >= 0 && pattern[j] === pattern[m - 1 - k]) {
      j--;
      k++;
      suffix[k] = j + 1;
    }
    
    if (j === -1) {
      prefix[k] = true;
    }
  }
  
  return { suffix, prefix };
}
function moveByGoodSuffix(j: number, m: number, suffix: number[], prefix: boolean[]): number {
  const k = m - 1 - j;  // length of good suffix
  if (suffix[k] !== -1) {
    return j - suffix[k] + 1;
  }

  for (let r = j + 2; r <= m - 1; r++) {
    if (prefix[m - r]) {
      return r;
    }
  }

  return m;
}
function boyerMooreSearch(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;
  if (m === 0) return 0;

  const badCharTable = buildBadCharTable(pattern);
  const { suffix, prefix } = buildGoodSuffixTables(pattern);

  let i = 0;  // index in text
  while (i <= n - m) {
    let j = m - 1;  // index in pattern
    while (j >= 0 && text[i + j] === pattern[j]) {
      j--;
    }

    if (j < 0) {
      return i; // match found at index i
    }

    const badCharShift = j - badCharTable[text.charCodeAt(i + j)];
    const goodSuffixShift = j < m - 1
      ? moveByGoodSuffix(j, m, suffix, prefix)
      : 0;
    
    i += Math.max(1, badCharShift, goodSuffixShift);
  }

  return -1; // no match found
}
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const index = boyerMooreSearch(text, pattern);
console.log(index);  // Outputs: 17
