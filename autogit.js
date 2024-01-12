function rabinKarpSearch(text, pattern) {
  const result = [];
  const p = 31; // Prime number to calculate hash
  const mod = 10 ** 9 + 9; // Large prime number to take mod
  const patternHash = calculateHash(pattern);

  function calculateHash(str) {
    let hash = 0;
    let pPow = 1;

    for (let i = 0; i < str.length; i++) {
      hash = (hash + (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * pPow) % mod;
      pPow = (pPow * p) % mod;
    }

    return hash;
  }

  for (let i = 0; i <= text.length - pattern.length; i++) {
    const textHash = calculateHash(text.substring(i, i + pattern.length));

    if (textHash === patternHash) {
      let found = true;

      for (let j = 0; j < pattern.length; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }

      if (found) {
        result.push(i);
      }
    }
  }

  return result;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = rabinKarpSearch(text, pattern);
console.log(matches); // Output: [10]
