function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;

  if (m > n) return result;

  const base = 256;        // Number of possible characters (extended ASCII)
  const prime = 101;       // A prime number for modulus to reduce collisions

  let patternHash = 0;     // Hash value for the pattern
  let textHash = 0;        // Hash value for the current window of text
  let h = 1;               // The value of base^(m-1) % prime

  // Precompute h = (base^(m-1)) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate initial hash values for pattern and the first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // If hash values match, check characters one by one to avoid collision
    if (patternHash === textHash) {
      let j = 0;
      for (; j < m; j++) {
        if (text[i + j] !== pattern[j]) break;
      }
      if (j === m) result.push(i);
    }

    // Calculate hash for next window of text: Remove leading char, add trailing char
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

      // We might get negative value, convert to positive
      if (textHash < 0) {
        textHash += prime;
      }
    }
  }

  return result;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
console.log(rabinKarp(text, pattern));  // Output: [10]
