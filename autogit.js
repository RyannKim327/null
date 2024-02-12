function calculateHash(str, prime, mod) {
  let hash = 0;
  
  for (let i = 0; i < str.length; i++) {
    hash = (hash * prime + str.charCodeAt(i)) % mod;
  }
  
  return hash;
}
function areEqual(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  
  return true;
}
function rabinKarpSearch(text, pattern) {
  const prime = 101; // A prime number for hashing
  const mod = 1000000007; // A large prime number for modulo
  
  const n = text.length;
  const m = pattern.length;
  
  const patternHash = calculateHash(pattern, prime, mod);
  let textHash = calculateHash(text.substring(0, m), prime, mod);
  
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash && areEqual(pattern, text.substring(i, i + m))) {
      return i; // pattern found at index i
    }
    
    // Calculate the rolling hash for the next window in the text
    if (i < n - m) {
      const prevChar = text.charCodeAt(i);
      const nextChar = text.charCodeAt(i + m);
      
      const power = (prime**(m - 1)) % mod;
      
      textHash = (prime * (textHash - prevChar * power) + nextChar) % mod;
      if (textHash < 0) {
        textHash += mod;
      }
    }
  }
  
  return -1; // pattern not found
}
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";

const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
