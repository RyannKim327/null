function hash(str) {
  let hashValue = 0;
  const prime = 101; // A prime number to use as a base

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, i);
  }

  return hashValue;
}
function rabinKarp(text, pattern) {
  const patternHash = hash(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;

  // Iterate through the text
  for (let i = 0; i <= textLength - patternLength; i++) {
    // Calculate the hash value of the current substring
    const substring = text.substring(i, i + patternLength);
    const substringHash = hash(substring);

    // Compare the hash values
    if (substringHash === patternHash && substring === pattern) {
      return i; // Return the index where the pattern is found
    }
  }

  return -1; // Return -1 if pattern is not found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const index = rabinKarp(text, pattern);

if (index === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at index ${index}`);
}
