function buildLSP(pattern: string): number[] {
  const lsp = new Array(pattern.length).fill(0);
  let prefixIndex = 0; // length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; i++) {
    while (prefixIndex > 0 && pattern[i] !== pattern[prefixIndex]) {
      prefixIndex = lsp[prefixIndex - 1];
    }

    if (pattern[i] === pattern[prefixIndex]) {
      prefixIndex++;
      lsp[i] = prefixIndex;
    }
  }

  return lsp;
}

function kmpSearch(text: string, pattern: string): number[] {
  const lsp = buildLSP(pattern);
  const result: number[] = [];
  let j = 0; // index for pattern

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = lsp[j - 1];
    }

    if (text[i] === pattern[j]) {
      j++;
    }

    if (j === pattern.length) {
      // match found, store starting index
      result.push(i - pattern.length + 1);
      j = lsp[j - 1];
    }
  }

  return result;
}
const text = "ababcabcabababd";
const pattern = "ababd";

const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [10]
