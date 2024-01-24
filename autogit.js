function createBadCharacterTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspool(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const badCharacter = createBadCharacterTable(pattern);

  let i = 0;

  while (i <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Pattern found
      return i;
    } else {
      const skip = badCharacter[text[i + j]] || m;
      i += skip;
    }
  }

  // Pattern not found
  return -1;
}
const text = 'This is a sample text';
const pattern = 'sample';

console.log(boyerMooreHorspool(text, pattern)); // Output: 10
