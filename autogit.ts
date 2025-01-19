function computeLPS(pattern: string): number[] {
  const lps: number[] = new Array(pattern.length).fill(0);
  let length = 0;

  for (let i = 1; i < pattern.length; ) {
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

function KMP(text: string, pattern: string): number[] {
  const lps = computeLPS(pattern);
  const indices: number[] = [];

  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;

      if (j === pattern.length) {
        indices.push(i - j);
        j = lps[j - 1];
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}

// Example usage:
const text = "abcdefghijabcdefghij";
const pattern = "ghi";

const indices = KMP(text, pattern);
console.log(indices); // Output: [7, 17]
