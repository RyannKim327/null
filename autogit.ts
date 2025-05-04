function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;
  if (m > n) return result; // Pattern longer than text -> no matches

  const base = 256; // Number of possible characters (extended ASCII)
  const prime = 101; // A prime number for modulo (to reduce collisions)

  // Compute initial hash for pattern and first window of text
  let patternHash = 0;
  let windowHash = 0;
  let h = 1; // The value of base^(m-1)

  // Precompute h = pow(base, m-1) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate the hash value of pattern and first window
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check the hash values of current window and pattern
    if (patternHash === windowHash) {
      // If hash values match, check the characters one by one for collision
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        result.push(i);
      }
    }
    // Calculate hash for next window: Remove leading char, add trailing char
    if (i < n - m) {
      windowHash =
        (base * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
        prime;
      // If negative, convert to positive
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }

  return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
console.log(rabinKarp(text, pattern)); // Output: [10]
