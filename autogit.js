function buildBadCharShift(pattern) {
  const table = {};
  const { length } = pattern;

  for (let i = 0; i < length - 1; i++) {
    table[pattern[i]] = length - 1 - i;
  }

  return table;
}
function searchBoyerMooreHorspool(text, pattern) {
  const { length: textSize } = text;
  const { length: patternSize } = pattern;
  const badCharShift = buildBadCharShift(pattern);
  let offset = 0;

  while (offset <= textSize - patternSize) {
    let mismatch = false;

    for (let i = patternSize - 1; i >= 0; i--) {
      const current = text[offset + i];

      if (pattern[i] !== current) {
        const badCharOffset = badCharShift[current] || patternSize;
        offset += badCharOffset;
        mismatch = true;
        break;
      }
    }

    if (!mismatch) {
      return offset;
    }
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const result = searchBoyerMooreHorspool(text, pattern);

if (result !== -1) {
  console.log(`Pattern found at index ${result}.`);
} else {
  console.log("Pattern not found.");
}
