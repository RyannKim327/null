function boyerMooreHorspool(pattern, text) {
  // Step 2: Prepare the bad character shift table
  const badCharShift = {};

  // Calculate the maximum offset
  const maxOffset = Math.max(1, pattern.length - 1);

  // Iterate over the pattern to determine the bad character shift table
  for (let i = 0; i < pattern.length - 1; i++) {
    badCharShift[pattern[i]] = maxOffset - i;
  }

  // Step 3: Search for the pattern in the text
  const indices = [];

  let i = 0; // Index in text
  while (i <= text.length - pattern.length) {
    let j = pattern.length - 1; // Index in pattern

    while (j >= 0 && pattern[j] === text[i + j]) {
      j--;
    }

    if (j === -1) {
      indices.push(i);
      i++;
    } else {
      const badChar = text[i + j];

      if (badCharShift.hasOwnProperty(badChar)) {
        i += badCharShift[badChar];
      } else {
        i += maxOffset;
      }
    }
  }

  return indices;
}
// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";

const indices = boyerMooreHorspool(pattern, text);
console.log("Pattern found at indices:", indices);
