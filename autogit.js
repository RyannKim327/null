function hash(pattern) {
  let sum = 0;
  // Calculate the hash by summing the ASCII values of each character
  for (let i = 0; i < pattern.length; i++) {
    sum += pattern.charCodeAt(i);
  }
  return sum;
}
function rabinKarpSearch(text, pattern) {
  const patternHash = hash(pattern);
  const windowSize = pattern.length;
  let currentHash = hash(text.substring(0, windowSize));

  // Iterate over the input text while maintaining a sliding window
  for (let i = 0; i <= text.length - windowSize; i++) {
    // Check if the current window's hash matches the pattern's hash
    if (currentHash === patternHash) {
      // Perform a character-wise comparison to handle hash collisions
      let found = true;
      for (let j = 0; j < windowSize; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        // Pattern found at index i
        return i;
      }
    }

    // Update the hash for the next window position
    currentHash -= text.charCodeAt(i);
    currentHash += text.charCodeAt(i + windowSize);
  }

  // Pattern not found
  return -1;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "sit";
const result = rabinKarpSearch(text, pattern);
console.log(result); // Output: 18
