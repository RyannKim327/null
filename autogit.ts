function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;
  if (m > n) return result;

  const base = 256;         // Number of characters in input alphabet
  const prime = 101;        // A prime number for mod to reduce collisions

  let patternHash = 0;      // Hash value for pattern
  let textHash = 0;         // Hash value for text window
  let h = 1;                // The value of base^(m-1) used to remove leading char

  // Precompute h = (base^(m-1)) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Compute initial hash values for pattern and first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check hash values and then confirm by checking actual substring
    if (patternHash === textHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    // Calculate hash for next window (remove leading char, add trailing char)
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

      // Make sure textHash is positive
      if (textHash < 0) {
        textHash += prime;
      }
    }
  }

  return result;
}
const text = "abracadabra";
const pattern = "abra";
const locations = rabinKarp(text, pattern);
console.log(locations);  // Output: [0, 7]
