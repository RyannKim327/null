function boyerMooreHorspool(text, pattern) {
  const table = createBadCharTable(pattern);
  const patternLength = pattern.length;
  const textLength = text.length;
  let shift = 0;

  while (shift <= textLength - patternLength) {
    let j = patternLength - 1;

    while (j >= 0 && pattern[j] === text[shift + j]) {
      j--;
    }

    if (j === -1) {
      return shift;
    }

    shift += table[text[shift + patternLength - 1]] || patternLength;
  }

  return -1;
}

function createBadCharTable(pattern) {
  const table = {};

  for (let i = 0; i < pattern.length - 1; i++) {
    table[pattern[i]] = pattern.length - 1 - i;
  }

  return table;
}
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: 6 (index where the pattern starts)
