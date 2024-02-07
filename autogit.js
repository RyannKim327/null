function hash(str) {
  let hashValue = 0;
  const prime = 101; // A prime number for modulo operation

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, i);
  }

  return hashValue;
}
function rabinKarp(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);
  let substringHash = hash(text.substring(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (substringHash === patternHash) {
      if (text.substring(i, i + patternLength) === pattern) {
        return i; // Match found at index i
      }
    }

    // Calculate the hash for the next substring
    substringHash =
      (substringHash -
        text.charCodeAt(i) +
        text.charCodeAt(i + patternLength)) *
      prime;
  }

  return -1; // Pattern not found
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
const pattern = 'ipsum';

const result = rabinKarp(text, pattern);

if (result === -1) {
  console.log('Pattern not found');
} else {
  console.log(`Pattern found at index ${result}`);
}
