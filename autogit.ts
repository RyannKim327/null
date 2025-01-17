function computeLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length !== 0) {
      length = lps[length - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

function kmpSearch(main: string, pattern: string): number[] {
  const lps = computeLPS(pattern);
  const indices: number[] = [];
  let i = 0;
  let j = 0;

  while (i < main.length) {
    if (main[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      indices.push(i - j);
      j = lps[j - 1];
    } else if (i < main.length && main[i] !== pattern[j]) {
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
const main = "banana is a good banana";
const pattern = "banana";
const indices = kmpSearch(main, pattern);
console.log(indices); // [0, 17]
