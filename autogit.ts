function rabinKarp(text: string, pattern: string): number[] {
  const matches: number[] = [];
  const m = pattern.length;
  const n = text.length;
  if (m > n) return matches;  // Pattern longer than text, no matches

  // Base for hashing (number of characters in input alphabet)
  const base = 256;
  // A large prime number for modulo to reduce collisions
  const prime = 101;

  // Precompute (base^(m-1)) % prime for use in rolling hash
  let h = 1;
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Compute initial hash values for pattern and first window of text
  let patternHash = 0;
  let windowHash = 0;
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide over text one character at a time
  for (let i = 0; i <= n - m; i++) {
    // If hashes match, do a character-by-character check to confirm
    if (patternHash === windowHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        matches.push(i);
      }
    }

    // Compute hash for next window (remove leading char, add trailing char)
    if (i < n - m) {
      windowHash = (base * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

      // Handle negative hash value
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }

  return matches;
}
const text = "abracadabra";
const pattern = "abra";
const results = rabinKarp(text, pattern);
console.log(results);  // Output: [0, 7]
