function boyerMooreHorspool(text: string, pattern: string): number {
  const m = pattern.length;
  const n = text.length;

  if (m === 0) return 0;          // empty pattern matches at start
  if (m > n) return -1;           // pattern longer than text can't match

  // Preprocessing: create the bad character skip table
  const skip: Record<string, number> = {};
  const lastIndex = m - 1;

  // For all characters in pattern except the last one,
  // record how far from the end they occur,
  // to decide how far to skip on mismatch.
  for (let i = 0; i < lastIndex; i++) {
    skip[pattern[i]] = lastIndex - i;
  }

  let i = 0;  // index in text
  while (i <= n - m) {
    let j = lastIndex;

    // Compare pattern from the end going backward
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // full match found at index i
      return i;
    } else {
      // Determine how far to skip
      const badChar = text[i + lastIndex];
      const skipVal = skip[badChar] ?? m;  // if char not in pattern, skip entire pattern length
      i += skipVal;
    }
  }

  return -1;  // no match found
}
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";
const index = boyerMooreHorspool(text, pattern);
console.log(index);  // Output: 17
