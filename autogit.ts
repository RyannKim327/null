function boyerMooreHorspool(text: string, pattern: string): number {
  const m = pattern.length;
  const n = text.length;

  if (m === 0) return 0; // empty pattern matches at start
  if (m > n) return -1;  // pattern longer than text can't match

  // Build the bad character shift table
  const badCharShift: Record<string, number> = {};
  for (let i = 0; i < m - 1; i++) {
    badCharShift[pattern[i]] = m - 1 - i;
  }

  let index = 0;

  while (index <= n - m) {
    let skip = 0;

    // Compare from end of the pattern
    for (let i = m - 1; i >= 0; i--) {
      if (pattern[i] !== text[index + i]) {
        const badChar = text[index + m - 1];
        skip = badCharShift[badChar] ?? m;
        break;
      }
    }

    if (skip === 0) {
      // Match found at position index
      return index;
    }

    index += skip;
  }

  return -1; // no match found
}
const text = "Here is a simple example";
const pattern = "example";

const position = boyerMooreHorspool(text, pattern);
console.log(position); // Output: 17
