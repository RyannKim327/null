function generateBadCharTable(pattern) {
  const table = new Array(256).fill(pattern.length); // Initialize the table with default value (pattern length)
  
  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
  }
  
  return table;
}
function boyerMooreSearch(text, pattern) {
  const badCharTable = generateBadCharTable(pattern);
  const n = text.length;
  const m = pattern.length;
  let shift = 0;

  while (shift <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j < 0) {
      return shift; // pattern found
    } else {
      shift += Math.max(1, j - badCharTable[text.charCodeAt(shift + j)]);
    }
  }

  return -1; // pattern not found
}
const text = "Hello World";
const pattern = "World";
const matchIndex = boyerMooreSearch(text, pattern);

if (matchIndex === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at index ${matchIndex}`);
}
