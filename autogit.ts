function naiveSearch(text: string, pattern: string): number[] {
  const results: number[] = [];
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let j = 0;
    for (; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) break;
    }
    if (j === pattern.length) results.push(i);
  }
  return results;
}
function buildLPS(pattern: string): number[] {
  const lps = Array(pattern.length).fill(0);
  let len = 0;
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
  const lps = buildLPS(pattern);
  const results: number[] = [];
  let i = 0; // index for text
  let j = 0; // index for pattern
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
      if (j === pattern.length) {
        results.push(i - j);
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
  return results;
}
