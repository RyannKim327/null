function hash(str) {
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }
  return hashValue;
}
function search(text, pattern) {
  const patternHash = hash(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;

  // Calculate the initial hash of the first window
  let window = text.slice(0, patternLength);
  let windowHash = hash(window);

  // Iterate through the text, moving the sliding window one character at a time
  for (let i = 0; i <= textLength - patternLength; i++) {
    // If the hash values match, check for exact matching
    if (windowHash === patternHash) {
      if (text.slice(i, i + patternLength) === pattern) {
        console.log(`Pattern found at index ${i}`);
      }
    }
    
    // Update the window hash for the next iteration
    windowHash -= text.charCodeAt(i);
    window = window.slice(1);
    window += text.charAt(i + patternLength);
    windowHash += text.charCodeAt(i + patternLength);
  }
}
const text = "Hello, how are you?";
const pattern = "how";

search(text, pattern);
Pattern found at index 7
