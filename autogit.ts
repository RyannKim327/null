function bmhSearch(text: string, pattern: string): number {
  const patternLength = pattern.length;
  const textLength = text.length;
  const skip: { [key: string]: number } = {};

  // Precompute the skip table
  for (let i = 0; i < patternLength - 1; i++) {
    skip[pattern[i]] = patternLength - 1 - i;
  }

  let i = patternLength - 1;
  let j;

  while (i < textLength) {
    j = patternLength - 1;

    while (text[i] === pattern[j]) {
      if (j === 0) {
        return i;
      }
      i--;
      j--;
    }

    i += skip[text[i]] || patternLength;
  }

  return -1; // not found
}
const text = "hello world";
const pattern = "world";
const result = bmhSearch(text, pattern);
console.log(result); // 6
