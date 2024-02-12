function calculateHash(str, prime, modulus) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * prime + str.charCodeAt(i)) % modulus;
  }
  return hash;
}
function rabinKarpSearch(text, pattern) {
  const PRIME = 31;
  const MODULUS = Math.pow(2, 32);
  const tLength = text.length;
  const pLength = pattern.length;
  
  if (tLength < pLength) {
    return -1; // Pattern length exceeds text length, no match possible
  }
  
  const pHash = calculateHash(pattern, PRIME, MODULUS);
  let tHash = calculateHash(text.substring(0, pLength), PRIME, MODULUS);
  
  for (let i = 0; i <= tLength - pLength; i++) {
    if (pHash === tHash) {
      if (text.substring(i, i + pLength) === pattern) {
        return i; // Pattern found at index i
      }
    }
    
    // Calculate hash value for the next window
    tHash = ((tHash - text.charCodeAt(i) * (PRIME**(pLength - 1))) * PRIME + 
      text.charCodeAt(i + pLength)) % MODULUS;
      
    if (tHash < 0) {
      // Ensure the hash value remains positive
      tHash += MODULUS;
    }
  }
  
  return -1; // Pattern not found in the text
}
const text = "ABACADABRACADAABRA";
const pattern = "ABRA";

const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
Pattern found at index 10
