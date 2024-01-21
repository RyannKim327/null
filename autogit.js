function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}
function rabinKarpSearch(text, pattern) {
  const patternHash = hash(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;

  // Calculate the hash value of the first substring in the text
  let textHash = hash(text.substr(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      // If the hash values match, compare each character
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Return the starting index of the found pattern
      }
    }

    // Recalculate the hash value of the next substring
    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + patternLength);
  }

  return -1; // Return -1 if pattern is not found
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
const pattern = 'ipsum';

const foundIndex = rabinKarpSearch(text, pattern);
if (foundIndex !== -1) {
  console.log(`Pattern found at index ${foundIndex}`);
} else {
  console.log('Pattern not found');
}
Pattern found at index 6
