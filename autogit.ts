function buildShiftTable(pattern: string): Record<string, number> {
  const table: Record<string, number> = {};
  const m = pattern.length;

  // Default shift is the length of the pattern
  for (let i = 0; i < m - 1; i++) {
    table[pattern[i]] = m - 1 - i;
  }

  return table;
}

function boyerMooreHorspool(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) return 0; // empty pattern matches at start
  if (m > n) return -1; // pattern longer than text can't match

  const shiftTable = buildShiftTable(pattern);
  let i = 0;

  while (i <= n - m) {
    let j = m - 1;

    // Match pattern from right to left
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      return i; // match found at index i
    } else {
      const shiftValue = shiftTable[text[i + m - 1]];
      i += shiftValue !== undefined ? shiftValue : m;
    }
  }

  return -1; // no match found
}

// Example usage:
const text = "here is a simple example";
const pattern = "example";
const index = boyerMooreHorspool(text, pattern);
console.log(index);  // Output: 17
