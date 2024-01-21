function calculateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(26, i);
  }
  return hash;
}
hash = (hash - text.charCodeAt(i) * Math.pow(26, 0)) * 26 + text.charCodeAt(i + pattern.length);
function rabinKarpSearch(pattern, text) {
  const patternHash = calculateHash(pattern);
  let textHash = calculateHash(text.slice(0, pattern.length));

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (textHash === patternHash) {
      if (text.slice(i, i + pattern.length) === pattern) {
        return i;
      }
    }

    textHash = (textHash - text.charCodeAt(i) * Math.pow(26, 0)) * 26 + text.charCodeAt(i + pattern.length);
  }

  return -1;
}

function calculateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(26, i);
  }
  return hash;
}

// Example usage
const text = 'Lorem ipsum dolor sit amet';
const pattern = 'dolor';
const index = rabinKarpSearch(pattern, text);
console.log(index); // Output: 12
