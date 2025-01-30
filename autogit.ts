function rabinKarpSearch(text: string, pattern: string): number[] {
  const d = 256; // number of characters in the input alphabet
  const q = 101; // a prime number used for hashing
  const patternLength = pattern.length;
  const textLength = text.length;
  const patternHash = 0;
  const textHash = 0;
  const h = 1;

  // calculate h value, which is used to calculate the hash value of the pattern and the text
  for (let i = 0; i < patternLength - 1; i++) {
    h = (h * d) % q;
  }

  // calculate the hash value of the pattern
  for (let i = 0; i < patternLength; i++) {
    patternHash = (d * patternHash + pattern.charCodeAt(i)) % q;
  }

  // calculate the hash value of the first window of the text
  for (let i = 0; i < patternLength; i++) {
    textHash = (d * textHash + text.charCodeAt(i)) % q;
  }

  const indices: number[] = [];

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      // check if the current window of the text matches the pattern
      let j;
      for (j = 0; j < patternLength; j++) {
        if (text.charCodeAt(i + j) !== pattern.charCodeAt(j)) {
          break;
        }
      }
      if (j === patternLength) {
        indices.push(i);
      }
    }

    // calculate the hash value of the next window of the text
    if (i < textLength - patternLength) {
      textHash = (d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLength)) % q;
      if (textHash < 0) {
        textHash += q;
      }
    }
  }

  return indices;
}
const text = "hello world hello";
const pattern = "hello";
const indices = rabinKarpSearch(text, pattern);
console.log(indices); // [0, 12]
