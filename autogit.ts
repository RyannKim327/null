function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];
  const m = pattern.length;
  const n = text.length;

  if (m > n) return result;

  const base = 256; // Number of characters in the input alphabet (extended ASCII)
  const prime = 101; // A prime number to mod the hash values
  
  let patternHash = 0; // Hash value for pattern
  let windowHash = 0;  // Hash value for text window
  let h = 1;

  // The value of h would be "pow(base, m-1)%prime"
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate the hash value of the pattern and first window of the text
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    windowHash = (base * windowHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // If the hash values match, then only check characters one by one
    if (patternHash === windowHash) {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text.charAt(i + j) !== pattern.charAt(j)) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    // Calculate hash for next window of text: Remove leading char, add trailing char
    if (i < n - m) {
      windowHash = (base * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      // We might get negative value, converting it to positive
      if (windowHash < 0) {
        windowHash += prime;
      }
    }
  }

  return result;
}
const text = "abracadabra";
const pattern = "abra";
const positions = rabinKarp(text, pattern);
console.log(positions); // Output: [0, 7]
