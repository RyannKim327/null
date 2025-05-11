function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;

  if (m > n) return result;

  const base = 256; // Number of characters in input alphabet (extended ASCII)
  const prime = 101; // A prime number used as modulus to reduce hash collisions

  // Compute the hash value of the pattern and first window of text
  let patternHash = 0;
  let windowHash = 0;
  let h = 1; // The value of base^(m-1) used to remove leading digit

  // Calculate h = pow(base, m-1) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Initial hash values for pattern and first text window
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // If hash values match, check the actual substring for match
    if (patternHash === windowHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    // Calculate hash value for next window of text:
    // Remove leading char and add trailing char
    if (i < n - m) {
      windowHash = (base * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

      // We might get negative value, convert it to positive
      if (windowHash < 0) {
        windowHash = windowHash + prime;
      }
    }
  }

  return result;
}

// Example usage:
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
const indices = rabinKarp(text, pattern);
console.log(indices); // Outputs [0, 10]
