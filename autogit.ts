function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;
  if (m > n) return result;

  const base = 256; // Number of possible characters
  const prime = 101; // A prime number for modulo operations

  // Compute the hash value of the pattern and first window of text
  let patternHash = 0;
  let windowHash = 0;
  let h = 1; // The value of base^(m-1) % prime

  // Precompute h = pow(base, m-1) % prime
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate the hash value for the pattern and first window
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text
  for (let i = 0; i <= n - m; i++) {
    // If the hash values match, check for characters one by one
    if (patternHash === windowHash) {
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

    // Calculate hash for next window
    if (i < n - m) {
      windowHash =
        (base * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
        prime;

      // We might get negative value of windowHash, converting it to positive
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }

  return result;
}
const text = "abracadabra";
const pattern = "abra";

const indices = rabinKarp(text, pattern);
console.log(indices); // Output: [0, 7]
