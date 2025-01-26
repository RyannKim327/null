function naiveStringMatch(text: string, pattern: string): number[] {
  const result: number[] = [];
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      result.push(i);
    }
  }
  return result;
}
function rabinKarpStringMatch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const patternHash = hash(pattern);
  const textLength = text.length;
  const patternLength = pattern.length;
  const d = 256; // number of possible characters
  const q = 101; // prime number
  let textHash = 0;
  let h = 1;

  // calculate h value
  for (let i = 0; i < patternLength - 1; i++) {
    h = (h * d) % q;
  }

  // calculate initial text hash value
  for (let i = 0; i < patternLength; i++) {
    textHash = (textHash * d + text.charCodeAt(i)) % q;
  }

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
        result.push(i);
      }
    }
    if (i < textLength - patternLength) {
      textHash = (textHash * d - text.charCodeAt(i) * h) % q;
      textHash = (textHash + text.charCodeAt(i + patternLength)) % q;
    }
  }
  return result;
}

function hash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 256 + str.charCodeAt(i)) % 101;
  }
  return hash;
}
function kmpStringMatch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const lps = computeLPS(pattern);
  let i = 0;
  let j = 0;
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }
    if (j === pattern.length) {
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return result;
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
