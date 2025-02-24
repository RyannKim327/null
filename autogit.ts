function KMP(pattern: string, text: string): number[] {
  const lps: number[] = buildLPS(pattern);
  const result: number[] = [];
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j); // match found at index i-j
      j = lps[j - 1]; // update j using lps
    } else if (i < text.length && pattern[j] !== text[i]) {
      // mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1]; // use the previous value of j
      } else {
        i++;
      }
    }
  }
  
  return result; // return all starting indices of matches
}

function buildLPS(pattern: string): number[] {
  const lps: number[] = new Array(pattern.length).fill(0);
  let length = 0; // length of the previous longest prefix suffix
  let i = 1; // we start checking from the second character

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1]; // try the previous length
      } else {
        lps[i] = 0; // no prefix matches
        i++;
      }
    }
  }
  
  return lps;
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = KMP(pattern, text);
console.log(`Pattern found at indices: ${matches.join(', ')}`);
