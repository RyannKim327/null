function hash(str) {
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }
  return hashValue;
}
function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);
  let windowHash = hash(text.slice(0, patternLength));

  // Check if the pattern matches the first window of the text
  if (windowHash === patternHash && text.slice(0, patternLength) === pattern) {
    return 0; // Pattern found at index 0
  }

  // Iterate through the remaining windows of the text
  for (let i = 1; i <= textLength - patternLength; i++) {
    // Update the rolling hash value
    windowHash -= text.charCodeAt(i - 1);
    windowHash += text.charCodeAt(i + patternLength - 1);

    // Check if the pattern matches the current window of the text
    if (windowHash === patternHash && text.slice(i, i + patternLength) === pattern) {
      return i; // Pattern found at index i
    }
  }

  return -1; // Pattern not found
}
const text = "This is a test string";
const pattern = "test";
console.log(rabinKarpSearch(text, pattern)); // Output: 10
