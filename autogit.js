function calculateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}
function rabinKarpSearch(pattern, text) {
  const patternHash = calculateHash(pattern);
  const patternLen = pattern.length;
  const textLen = text.length;

  // Calculate the initial hash of the first substring of the text
  let textHash = calculateHash(text.substring(0, patternLen));

  // Iterate through each substring of text of length equal to the pattern length
  for (let i = 0; i <= textLen - patternLen; i++) {
    // Check if the current substring's hash matches the pattern's hash
    if (textHash === patternHash) {
      let found = true;
      // Compare each character of the substring with the pattern
      for (let j = 0; j < patternLen; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      // If the substring matches the pattern, return the starting index
      if (found) {
        return i;
      }
    }
    // Calculate the hash of the next substring using a rolling hash technique
    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + patternLen);
  }

  // Pattern not found, return -1
  return -1;
}
const pattern = "ABC";
const text = "ABCDABCEABC";
const result = rabinKarpSearch(pattern, text);
console.log(`Pattern found at index: ${result}`);
Pattern found at index: 0
