function rabinKarp(text, pattern) {
  const prime = 101; // A prime number
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);

  // Calculate the hash value of a string
  function hash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
      // Multiply the ASCII value of each character by the prime number raised to the power of its position
      hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
  }

  // Check if the two strings match
  function isEqual(str1, str2) {
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) return false;
    }
    return true;
  }

  // Slide the window of the text and compare hash values
  for (let i = 0; i <= textLength - patternLength; i++) {
    const currentWindow = text.substring(i, i + patternLength);
    const currentWindowHash = hash(currentWindow);

    if (currentWindowHash === patternHash && isEqual(currentWindow, pattern)) {
      return i; // Match found, return the index
    }
  }

  return -1; // Match not found
}

// Example usage
const text = 'Hello, World!';
const pattern = 'World';
const index = rabinKarp(text, pattern);
console.log(index); // Output: 7
