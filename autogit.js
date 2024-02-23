function buildPatternTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let j = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      j++;
      table[i] = j;
    } else {
      if (j) {
        j = table[j - 1];
        i--;
      } else {
        table[i] = 0;
      }
    }
  }
  
  return table;
}

function kmpSearch(text, pattern) {
  const table = buildPatternTable(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return i - j;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = table[j - 1];
    } else {
      i++;
    }
  }
  
  return -1;
}

// Test the implementation
const text = "ababcababcabcabcab";
const pattern = "abcabcabc";
const index = kmpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
