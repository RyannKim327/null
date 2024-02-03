function calculateHash(str) {
  const p = 31; // prime number
  const m = 10 ** 9 + 9; // large prime number

  let hash = 0;
  let pPow = 1;

  for (let i = 0; i < str.length; i++) {
    hash = (hash + (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * pPow) % m;
    pPow = (pPow * p) % m;
  }

  return hash;
}
function rabinKarp(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const patternHash = calculateHash(pattern);
  const textHashes = [];

  // Calculate the hash values of all substrings of length m in the text
  for (let i = 0; i <= n - m; i++) {
    if (i === 0) {
      textHashes[i] = calculateHash(text.substring(i, i + m));
    } else {
      // Reuse the previous hash value to calculate the current hash value in O(1) time
      const prevHash = textHashes[i - 1];
      const prevCharHash = (text.charCodeAt(i - 1) - 'a'.charCodeAt(0) + 1) * (31 ** m);
      const currCharHash = text.charCodeAt(i + m - 1) - 'a'.charCodeAt(0) + 1;

      textHashes[i] = (prevHash - prevCharHash + currCharHash) % (10 ** 9 + 9);
    }

    // If the calculated hash matches the pattern's hash, check if it's a false positive
    if (textHashes[i] === patternHash) {
      if (text.substring(i, i + m) === pattern) {
        return i; // Return the index where the pattern starts
      }
    }
  }

  return -1; // Return -1 if pattern is not found in text
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "dolor";

const index = rabinKarp(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found in the text");
}
