function generateBadCharTable(pattern) {
  const table = new Array(256).fill(pattern.length);

  for (let i = 0; i < pattern.length - 1; i++) {
    const charCode = pattern.charCodeAt(i);
    table[charCode] = pattern.length - 1 - i;
  }

  return table;
}
function boyerMooreHorspoolSearch(text, pattern) {
  const badCharTable = generateBadCharTable(pattern);
  let i = pattern.length - 1;

  while (i < text.length) {
    let j = pattern.length - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      i--;
      j--;
    }

    if (j === -1) {
      return i + 1; // Pattern found
    }

    const charCode = text.charCodeAt(i);
    i += Math.max(badCharTable[charCode], 1);
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";

const index = boyerMooreHorspoolSearch(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
