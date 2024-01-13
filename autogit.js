function boyerMooreHorspool(text, pattern) {
  // Step 2: Preprocess pattern
  const { badMatchTable, patternLength } = preprocessPattern(pattern);

  // Step 3: Perform string searching
  let matches = search(text, pattern, badMatchTable, patternLength);

  // Step 4: Return the matched indices
  return matches;
}
function preprocessPattern(pattern) {
  const patternLength = pattern.length;
  const badMatchTable = {};

  for (let i = 0; i < patternLength - 1; i++) {
    badMatchTable[pattern[i]] = patternLength - 1 - i;
  }

  // Default shift for other characters
  badMatchTable.default = patternLength;

  return { badMatchTable, patternLength };
}
function search(text, pattern, badMatchTable, patternLength) {
  const matches = [];
  const textLength = text.length;
  let i = 0;

  while (i <= textLength - patternLength) {
    let j = patternLength - 1;
    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      // Match found
      matches.push(i);
      i += patternLength;
    } else {
      const badMatchChar = text[i + j];
      const shift = badMatchTable[badMatchChar] || badMatchTable.default;
      i += shift;
    }
  }

  return matches;
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const pattern = 'sit';

const matches = boyerMooreHorspool(text, pattern);
console.log(matches); // Output: [18]
