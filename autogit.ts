function buildKMPTable(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let len = 0; // length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
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

  const lps = buildKMPTable(pattern);
  const result: number[] = [];
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      if (j === pattern.length) {
        result.push(i - j); // found a match
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

  return result;
}
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = kmpSearch(text, pattern);
console.log(matches);  // Output: [10]
