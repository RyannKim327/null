function rabinKarp(pat, txt) {
  const M = pat.length;
  const N = txt.length;
  const prime = 101; // A prime number (larger than the character set size)

  // Function to calculate the hash value
  function calculateHash(str) {
    let hash = 0;
    for (let i = 0; i < M; i++) {
      hash += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
  }

  const pHash = calculateHash(pat);
  let tHash = calculateHash(txt.slice(0, M));

  for (let i = 0; i <= N - M; i++) {
    if (pHash === tHash) {
      let found = true;
      for (let j = 0; j < M; j++) {
        if (pat[j] !== txt[i + j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Match found at index i
      }
    }
    // Update the hash value for the next window
    tHash = (tHash - txt.charCodeAt(i) + txt.charCodeAt(i + M)) * prime;
  }

  return -1; // No match found
}

// Example usage:
const text = "AABAACAADAABAAABAA";
const pattern = "AABA";
const index = rabinKarp(pattern, text);

console.log(`Pattern found at index ${index}`);
