function BoyerMooreHorspool(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  if (patternLength === 0) {
    return -1;
  }

  if (patternLength > textLength) {
    return -1;
  }

  const badMatchTable = new Array(256).fill(patternLength);
  
  for (let i = 0; i < patternLength - 1; i++) {
    badMatchTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
  }

  let i = patternLength - 1;
  while (i < textLength) {
    let j = patternLength - 1;
    let k = i;

    while (j >= 0 && text[k] === pattern[j]) {
      j--;
      k--;
    }

    if (j === -1) {
      return k + 1;
    }

    i += badMatchTable[text.charCodeAt(i)];
  }

  return -1;
}

// Example usage:
const text = 'exampletextforexample';
const pattern = 'example';
const index = BoyerMooreHorspool(text, pattern);

console.log('Pattern found at index:', index);
