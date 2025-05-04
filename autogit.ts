function boyerMooreHorspool(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) return 0;             // Edge case: empty pattern matches at index 0
  if (m > n) return -1;              // Pattern longer than text cannot match

  // Preprocessing: build the bad character skip table
  const skip: Record<string, number> = {};

  for (let i = 0; i < m - 1; i++) {
    skip[pattern[i]] = m - 1 - i;
  }

  let i = 0;  // index in text

  while (i <= n - m) {
    let j = m - 1; // index in pattern, start from the end

    // Compare backwards from the end of the pattern
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j < 0) {
      // Match found
      return i;
    }

    // Get the skip value for the mismatched char in the text
    const skipValue = skip[text[i + m - 1]] || m;
    i += skipValue;
  }

  return -1; // No match found
}
const text = "abracadabra";
const pattern = "cada";
const index = boyerMooreHorspool(text, pattern);
console.log(index); // Output: 4, because "cada" starts at index 4 in "abracadabra"
