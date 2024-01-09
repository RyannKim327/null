function boyerMooreHorspool(text, pattern) {
  const matches = [];
  const shiftTable = {};

  // Initialize shift table
  for (let i = 0; i < pattern.length - 1; i++) {
    shiftTable[pattern[i]] = pattern.length - 1 - i;
  }

  let i = pattern.length - 1;
  while (i < text.length) {
    let j = 0;

    // Check for a match
    while (j < pattern.length && text[i - j] === pattern[pattern.length - 1 - j]) {
      j++;
    }

    if (j === pattern.length) {
      // Match found, push the index to the matches array
      matches.push(i - pattern.length + 1);
    }

    // Update the index with the shift value
    if (shiftTable[text[i]]) {
      i += shiftTable[text[i]];
    } else {
      i += pattern.length;
    }
  }

  return matches;
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";
const matches = boyerMooreHorspool(text, pattern);
console.log(matches);  // Output: [6]
