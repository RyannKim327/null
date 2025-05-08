function buildLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0; // length of the previous longest prefix suffix
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

function kmpSearch(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];

  const lps = buildLPS(pattern);
  const result: number[] = [];

  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      // Match found at index i-j
      result.push(i - j);
      j = lps[j - 1]; // Continue searching for next potential match
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result; // Return all starting indices of matches
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";

console.log(kmpSearch(text, pattern)); // Output: [10]
