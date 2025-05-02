function boyerMooreHorspool(text: string, pattern: string): number {
  const m = pattern.length;
  const n = text.length;

  if (m === 0) return 0; // empty pattern matches at start
  if (m > n) return -1; // pattern longer than text can’t match

  // Build the bad character shift table
  const shiftTable: { [key: string]: number } = {};
  for (let i = 0; i < m - 1; i++) {
    shiftTable[pattern[i]] = m - 1 - i;
  }

  // Default shift for chars not in pattern
  const defaultShift = m;

  let index = 0;
  while (index <= n - m) {
    let j = m - 1;

    // Match from right to left
    while (j >= 0 && pattern[j] === text[index + j]) {
      j--;
    }

    if (j < 0) {
      return index; // match found
    }

    // Shift pattern using bad character rule
    const badChar = text[index + m - 1];
    index += shiftTable[badChar] ?? defaultShift;
  }

  return -1; // no match found
}
const text = 'Here is a simple example';
const pattern = 'simple';

const result = boyerMooreHorspool(text, pattern);

console.log(result); // 10
