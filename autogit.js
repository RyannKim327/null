function rabinKarp(text, pattern) {
  const prime = 101; // Prime number for hash calculation
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);

  // Calculate initial hash value for the first window of the text
  let windowHash = hash(text.substring(0, patternLength));

  // Check if pattern exists in the first window
  if (patternHash === windowHash && text.substring(0, patternLength) === pattern) {
    return 0; // Pattern found at index 0
  }

  // Move the window one character at a time
  for (let i = patternLength; i < textLength; i++) {
    // Remove the leftmost character from the window hash
    windowHash -= text.charCodeAt(i - patternLength);
    // Shift the window hash by multiplying with prime number
    windowHash *= prime;
    // Add the new character to the window hash
    windowHash += text.charCodeAt(i);

    // Check if pattern exists in the current window
    if (windowHash === patternHash && text.substring(i - patternLength + 1, i + 1) === pattern) {
      return i - patternLength + 1; // Pattern found at index i - patternLength + 1
    }
  }

  return -1; // Pattern not found
}

// Hash function
function hash(str) {
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hashValue;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = rabinKarp(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
