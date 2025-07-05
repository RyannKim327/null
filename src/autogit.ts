function rabinKarpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;
  const base = 256; // Number of possible characters
  const prime = 101; // A prime number for modulus to reduce collisions

  if (m > n) return result;

  let patternHash = 0; // Hash value for pattern
  let textHash = 0;    // Hash value for current window
  let h = 1;         // The high order digit (for removing leading digit)

  // Precompute (base^(m-1)) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate initial hash values for pattern and first window
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text
  for (let i = 0; i <= n - m; i++) {
    // If the hash values match, check for characters one by one to avoid false positives due to collisions
    if (patternHash === textHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text.charAt(i + j) !== pattern.charAt(j)) {
          match = false;
          break;
        }
      }
      if (match) {
        result.push(i);
      }
    }

    // Calculate hash for next window
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      // We might get negative value of textHash, converting it to positive
      if (textHash < 0) {
        textHash += prime;
      }
    }
  }

  return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABC";

const matches = rabinKarpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
