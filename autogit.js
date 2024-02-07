function calculateHash(str, n) {
  const CHAR_TO_INT = new Map([
    ['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4], ['f', 5],
    // continue mapping each letter to its corresponding number
  ]);
  
  let hash = 0;
  for (let i = 0; i < n; i++) {
    hash += Math.pow(26, n - 1 - i) * CHAR_TO_INT.get(str[i]);
  }
  return hash;
}
function rabinKarpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  const patternHash = calculateHash(pattern, m);
  let textHash = calculateHash(text, m);

  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      let foundMatch = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          foundMatch = false;
          break;
        }
      }
      if (foundMatch) {
        return i; // return the index of the first occurrence
      }
    }
    if (i < n - m) {
      textHash -= Math.pow(26, m - 1) * CHAR_TO_INT.get(text[i]);
      textHash = textHash * 26 + CHAR_TO_INT.get(text[i + m]);
    }
  }

  return -1; // pattern not found
}
const text = 'The quick brown fox jumps over the lazy dog.';
const pattern = 'brown';
const index = rabinKarpSearch(text, pattern);
console.log(index); // Output: 10
