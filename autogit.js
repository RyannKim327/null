function boyerMooreHorspool(text, pattern) {
  const patternLength = pattern.length;
  const table = buildTable(pattern);

  let i = patternLength - 1;
  while (i < text.length) {
    let j = patternLength - 1;

    while (j >= 0 && text[i] === pattern[j]) {
      j--;
      i--;
    }

    if (j === -1) {
      return i + 1;
    } else {
      const mismatchedChar = text[i];
      const shift = table[mismatchedChar] || patternLength;
      i += shift;
    }
  }

  return -1;
}

function buildTable(pattern) {
  const table = {};
  const patternLength = pattern.length - 1;

  for (let i = 0; i < patternLength; i++) {
    table[pattern[i]] = patternLength - i;
  }

  return table;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "dolor";

const position = boyerMooreHorspool(text, pattern);
if (position !== -1) {
  console.log(`Pattern found at position ${position}`);
} else {
  console.log("Pattern not found");
}
