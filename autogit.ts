function rabinKarp(text: string, pattern: string): number[] {
  const result: number[] = [];

  const m = pattern.length;
  const n = text.length;

  if (m > n) return result; // pattern longer than text, no matches

  const base = 256; // number of possible characters (extended ASCII)
  const prime = 101; // a prime number for modulo to reduce collisions

  let patternHash = 0;
  let textHash = 0;
  let h = 1;

  // The value of h would be "base^(m-1) % prime"
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % prime;
  }

  // Calculate the hash value of pattern and first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (base * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check the hash values of current window of text and pattern
    if (patternHash === textHash) {
      // Check for characters one by one to avoid spurious hit
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text.charAt(i + j) !== pattern.charAt(j)) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    // Calculate hash value for next window of text:
    // Remove leading digit, add trailing digit
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

      // We might get negative value of textHash, convert it to positive
      if (textHash < 0) {
        textHash += prime;
      }
    }
  }

  return result;
}
const text = "abracadabra";
const pattern = "abra";

const occurrences = rabinKarp(text, pattern);
console.log(occurrences); // Output: [0, 7]
