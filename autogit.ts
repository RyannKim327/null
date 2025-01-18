function bruteForceSearch(text: string, pattern: string): number | null {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i; // found a match at index i
    }
  }
  return null; // no match found
}
function rabinKarpSearch(text: string, pattern: string): number | null {
  const patternHash = hash(pattern);
  const textSize = text.length;
  const patternSize = pattern.length;
  const prime = 31;
  const modulus = 1e9 + 7;

  let textHash = 0;
  for (let i = 0; i < patternSize; i++) {
    textHash = (textHash * prime + charCodeAt(text, i)) % modulus;
  }

  for (let i = 0; i <= textSize - patternSize; i++) {
    if (textHash === patternHash && text.slice(i, i + patternSize) === pattern) {
      return i; // found a match at index i
    }
    if (i < textSize - patternSize) {
      textHash = (textHash - charCodeAt(text, i) * Math.pow(prime, patternSize - 1)) % modulus;
      textHash = (textHash * prime + charCodeAt(text, i + patternSize)) % modulus;
      if (textHash < 0) {
        textHash += modulus;
      }
    }
  }
  return null; // no match found
}

function hash(str: string): number {
  let hash = 0;
  const prime = 31;
  const modulus = 1e9 + 7;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * prime + charCodeAt(str, i)) % modulus;
  }
  return hash;
}

function charCodeAt(str: string, index: number): number {
  return str.charCodeAt(index);
}
function kmpSearch(text: string, pattern: string): number | null {
  const lps = computeLPS(pattern);
  let i = 0; // index for text
  let j = 0; // index for pattern
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      return i - j; // found a match at index i - j
    }
    else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return null; // no match found
}

function computeLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
function zAlgorithm(text: string, pattern: string): number | null {
  const s = pattern + "#" + text;
  const z = new Array(s.length).fill(0);
  let left = 0;
  let right = 0;
  for (let i = 1; i < s.length; i++)
