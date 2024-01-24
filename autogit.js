function calculateHash(str, len) {
  let hash = 0;
  for (let i = 0; i < len; i++) {
    hash += str.charCodeAt(i) * Math.pow(31, len - i - 1);
  }
  return hash;
}
function RabinKarp(text, pattern) {
  const N = text.length;
  const M = pattern.length;
  const patternHash = calculateHash(pattern, M);
  let textHash = calculateHash(text, M);

  for (let i = 0; i <= N - M; i++) {
    if (textHash === patternHash) {
      let j;
      for (j = 0; j < M; j++) {
        if (text[i + j] !== pattern[j]) {
          break;
        }
      }
      if (j === M) {
        return i; // Pattern found at index i
      }
    }
    if (i < N - M) {
      // Update the rolling hash value
      textHash =
        (textHash - text.charCodeAt(i) * Math.pow(31, M - 1)) * 31 +
        text.charCodeAt(i + M);
    }
  }
  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const index = RabinKarp(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
