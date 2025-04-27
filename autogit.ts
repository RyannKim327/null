function boyerMooreHorspoolSearch(haystack: string, needle: string): number {
  if (needle.length === 0) return 0; // empty needle, match at start
  if (needle.length > haystack.length) return -1;

  // Build shift table
  const shiftTable: { [char: string]: number } = {};

  // Populate shift table for all but the last character of pattern
  for (let i = 0; i < needle.length - 1; i++) {
    shiftTable[needle[i]] = needle.length - 1 - i;
  }

  const lastIndex = needle.length - 1;
  let index = 0;

  while (index <= haystack.length - needle.length) {
    let matchIndex = lastIndex;

    // Check for match from the end of pattern
    while (matchIndex >= 0 && haystack[index + matchIndex] === needle[matchIndex]) {
      matchIndex--;
    }

    if (matchIndex < 0) {
      // Found a match
      return index;
    } else {
      // Mismatch found, determine how far to shift
      const mismatchedChar = haystack[index + lastIndex];
      const shift = shiftTable[mismatchedChar] || needle.length;
      index += shift;
    }
  }

  return -1; // no match found
}
const text = "here is a sample text to search within.";
const pattern = "search";

const position = boyerMooreHorspoolSearch(text, pattern);
console.log(position); // Should print the index where "search" starts, or -1 if not found.
