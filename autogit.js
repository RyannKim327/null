function createBCST(pattern) {
  const bcst = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    bcst[pattern[i]] = pattern.length - 1 - i;
  }

  return bcst;
}
function search(text, pattern) {
  const bcst = createBCST(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let i = patternLength - 1;

  while (i < textLength) {
    let j = patternLength - 1;
    let k = i;

    while (j >= 0 && text[k] === pattern[j]) {
      j--;
      k--;
    }

    if (j === -1) {
      return k + 1; // found the pattern
    } else {
      const shift = bcst[text[i]];
      i += shift || patternLength;
    }
  }

  return -1; // pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "sit";

const index = search(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}.`);
} else {
  console.log("Pattern not found.");
}
