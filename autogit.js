function hash(str) {
  let hashValue = 0;
  const prime = 101; // A prime number

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, i);
  }

  return hashValue;
}
function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);
  let textHash = hash(text.substring(0, patternLength));

  for (let i = 0; i < textLength - patternLength + 1; i++) {
    if (textHash === patternHash) {
      let found = true;

      // Check character-by-character if a match is found
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }

      if (found) {
        return i; // Match found at index i
      }
    }

    // Update the rolling hash value for the next substring
    textHash =
      textHash - text.charCodeAt(i) + text.charCodeAt(i + patternLength);
  }

  return -1; // No match found
}
const text = "ABABCABABDABABCABABC";
const pattern = "ABABCABABC";
const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
