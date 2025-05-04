function rabinKarpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;
  if (m > n) return result;

  const base = 256;  // Number of characters in the input alphabet
  const prime = 101; // A prime number to mod the hash values for better distribution

  // Compute the highest power of base used (base^(m-1)) % prime
  let highestPower = 1;
  for (let i = 0; i < m - 1; i++) {
    highestPower = (highestPower * base) % prime;
  }

  // Compute initial hash values for pattern and first window in text
  let patternHash = 0;
  let windowHash = 0;

  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // If hash values match, check characters one by one for confirmation (to avoid spurious hits)
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

    // Calculate hash for next window: Remove leading char, add trailing char
    if (i < n - m) {
      windowHash = (
        (windowHash - text.charCodeAt(i) * highestPower) * base +
        text.charCodeAt(i + m)
      ) % prime;

      // In case of negative value, convert to positive
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }

  return result;
}
const text = "abracadabra";
const pattern = "abra";
const indices = rabinKarpSearch(text, pattern);
console.log(indices); // Outputs [0, 7]
