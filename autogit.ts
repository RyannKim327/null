function rabinKarp(text: string, pattern: string): number {
  const m = pattern.length;
  const n = text.length;
  if (m > n) return -1;

  const base = 256; // Number of possible characters (extended ASCII)
  const prime = 101; // A prime number to mod the hash values

  // Calculate the hash value of the pattern and the first window of text
  let patternHash = 0;
  let textHash = 0;
  let h = 1; // The value of base^(m-1) % prime

  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check the hash values of current window of text and pattern
    if (patternHash === textHash) {
      // If the hash values match, check the characters one by one
      let j = 0;
      for (; j < m; j++) {
        if (text[i + j] !== pattern[j]) break;
      }

      if (j === m) return i; // Match found at index i
    }

    // Calculate hash value for next window of text: Remove leading char, add trailing char
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      if (textHash < 0) textHash += prime;
    }
  }

  return -1; // No match found
}
const text = "hello world";
const pattern = "world";
const index = rabinKarp(text, pattern);
console.log(index); // Output: 6
