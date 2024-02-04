function buildPatternTable(pattern) {
  const table = [0];
  let prefix = 0;
  
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[prefix]) {
      prefix++;
    } else {
      prefix = 0;
    }
    table[i] = prefix;
  }
  
  return table;
}

function stringMatch(text, pattern) {
  const patternTable = buildPatternTable(pattern);
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      if (patternIndex === pattern.length - 1) {
        return true; // Match found
      }
      patternIndex++;
      textIndex++;
    } else if (patternIndex > 0) {
      patternIndex = patternTable[patternIndex - 1];
    } else {
      textIndex++;
    }
  }

  return false; // No match found
}

// Example usage:
const text = "Lorem ipsum dolor sit amet";
const pattern = "ipsum";

console.log(stringMatch(text, pattern)); // Output: true
