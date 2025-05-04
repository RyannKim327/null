function computeLPSArray(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0; // length of the longest prefix which is also suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1]; // Try previous longest prefix
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function KMPSearch(text: string, pattern: string): number[] {
  const lps = computeLPSArray(pattern);
  const result: number[] = [];
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j); // pattern found at index (i-j)
      j = lps[j - 1]; // continue for next possible match
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
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = KMPSearch(text, pattern);
console.log(matches); // Output: [10]
