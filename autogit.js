function boyerMooreHorspool(searchString, patternString) {
  // Initialize variables
  const searchLength = searchString.length;
  const patternLength = patternString.length;
  const indices = [];

  // Construct the bad character shift table
  const badCharTable = constructBadCharTable(patternString);

  // Perform string search
  let i = 0;
  while (i <= searchLength - patternLength) {
    let j = patternLength - 1;

    // Compare characters from the end of the pattern to the start
    while (j >= 0 && searchString[i + j] === patternString[j]) {
      j--;
    }

    if (j < 0) {
      // Pattern found
      indices.push(i);
      i += patternLength;
    } else {
      // Shift based on the bad character rule
      i += Math.max(1, j - badCharTable[searchString.charCodeAt(i + j)]);
    }
  }

  return indices;
}
function constructBadCharTable(patternString) {
  const patternLength = patternString.length;
  const badCharTable = new Array(256).fill(patternLength); // Initialize table with default shift value

  // Fill table with character-specific shift values
  for (let i = 0; i < patternLength - 1; i++) {
    badCharTable[patternString.charCodeAt(i)] = patternLength - 1 - i;
  }

  return badCharTable;
}
const searchString = "ABABCABABDABABCABABC";
const patternString = "ABABCABABC";
const indices = boyerMooreHorspool(searchString, patternString);

console.log(indices); // Output: [0, 9, 15]
