function generateBadCharacterTable(pattern) {
  const table = {};
  
  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }
  
  return table;
}
function searchBMH(text, pattern) {
  const m = pattern.length;
  const n = text.length;
  const table = generateBadCharacterTable(pattern);
  
  let i = m - 1; // pattern pointer
  let j = m - 1; // text pointer
  
  while (j < n) {
    if (pattern[i] === text[j]) {
      if (i === 0) {
        return j; // match found
      } else {
        i--;
        j--;
      }
    } else {
      // perform bad character shift
      const shift = table[text[j]] || m;
      j += shift;
      i = m - 1;
    }
  }
  
  return -1; // no match found
}
const text = "Hello, how are you?";
const pattern = "are";

const index = searchBMH(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found.");
}
