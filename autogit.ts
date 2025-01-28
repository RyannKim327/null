function kmpSearch(text: string, pattern: string): number[] {
  const patternLength = pattern.length;
  const textLength = text.length;
  const lps = new Array(patternLength).fill(0); // lookup table
  let j = 0; // index for pattern

  // compute lookup table
  for (let i = 1; i < patternLength; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = lps[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
    }
    lps[i] = j;
  }

  const indices: number[] = [];
  j = 0; // index for pattern
  for (let i = 0; i < textLength; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = lps[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === patternLength) {
      indices.push(i - patternLength + 1);
      j = lps[j - 1];
    }
  }
  return indices;
}
function rabinKarpSearch(text: string, pattern: string): number[] {
  const patternLength = pattern.length;
  const textLength = text.length;
  const prime = 257; // a prime number
  const modulo = 1e9 + 7; // a large prime modulus
  const patternHash = 0;
  let textHash = 0;
  const indices: number[] = [];

  // compute hash values for pattern and initial window of text
  for (let i = 0; i < patternLength; i++) {
    patternHash = (patternHash * prime + pattern.charCodeAt(i)) % modulo;
    textHash = (textHash * prime + text.charCodeAt(i)) % modulo;
  }

  // slide the window and compare hash values
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (textHash === patternHash) {
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        indices.push(i);
      }
    }
    if (i < textLength - patternLength) {
      textHash = (textHash - text.charCodeAt(i) * Math.pow(prime, patternLength - 1)) % modulo;
      if (textHash < 0) {
        textHash += modulo;
      }
      textHash = (textHash * prime + text.charCodeAt(i + patternLength)) % modulo;
    }
  }
  return indices;
}
function zAlgorithmSearch(text: string, pattern: string): number[] {
  const combined = pattern + '#' + text;
  const zArray = new Array(combined.length).fill(0);
  let left = 0;
  let right = 0;
  const indices: number[] = [];

  for (let i = 1; i < combined.length; i++) {
    if (i <= right) {
      zArray[i] = Math.min(right - i + 1, zArray[i - left]);
    }
    while (i + zArray[i] < combined.length && combined[zArray[i]] === combined[zArray[i] + i]) {
      zArray[i]++;
    }
    if (i + zArray[i] - 1 > right) {
      left = i;
      right = i
