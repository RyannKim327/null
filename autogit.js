function search(text, pattern) {
  // Step 2: Preprocessing
  const table = createBadCharTable(pattern);
  
  // Step 3: Searching
  let i = pattern.length - 1;
  while (i < text.length) {
    let j = pattern.length - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j === -1) {
      // Pattern found
      return i + 1;
    } else {
      // Shift based on bad character table
      i += table[text[i]] || pattern.length;
    }
  }

  return -1; // Pattern not found
}
function createBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "sit";

const index = search(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
