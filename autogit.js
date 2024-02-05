function calculateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}
function updateHash(hash, oldChar, newChar, patternLength) {
  hash -= oldChar.charCodeAt(0);
  hash += newChar.charCodeAt(0);
  return hash;
}
function checkMatch(text, pattern, index) {
  for (let i = 0; i < pattern.length; i++) {
    if (text[index + i] !== pattern[i]) {
      return false;
    }
  }
  return true;
}
function searchRabinKarp(text, pattern) {
  const patternHash = calculateHash(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  
  // Calculate the initial hash of the first substring in the text
  let textHash = calculateHash(text.substring(0, patternLength));
  
  // Iterate through the text, checking substrings of length patternLength
  for (let i = 0; i <= textLength - patternLength; i++) {
    // If the hash values match, perform an additional check
    if (textHash === patternHash && checkMatch(text, pattern, i)) {
      return i; // Return the index when pattern is found
    }
    
    // Update the hash value for the next substring
    textHash = updateHash(
      textHash,
      text[i],
      text[i + patternLength],
      patternLength
    );
  }
  
  return -1; // Return -1 when pattern is not found
}
const text = "Hello, world!";
const pattern = "world";
const index = searchRabinKarp(text, pattern);
console.log(index); // Output: 7
