function rabinKarpSearch(source, pattern) {
  const prime = 31; // Prime number for hashing
  const sourceLength = source.length;
  const patternLength = pattern.length;
  const maxPower = Math.pow(prime, patternLength - 1);

  // Calculate the hash value of the pattern
  let patternHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash = patternHash * prime + pattern.charCodeAt(i);
  }

  // Calculate the hash value of the initial substring in the source string
  let sourceHash = 0;
  for (let i = 0; i < patternLength; i++) {
    sourceHash = sourceHash * prime + source.charCodeAt(i);
  }

  // Iterate over the source string
  for (let i = 0; i <= sourceLength - patternLength; i++) {
    // Handle hash collisions
    if (patternHash === sourceHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (source[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Match found
      }
    }

    // Slide the window and update the hash value
    sourceHash = (sourceHash - source.charCodeAt(i) * maxPower) * prime + source.charCodeAt(i + patternLength);
  }

  return -1; // No match found
}

// Usage example
const sourceString = 'Lorem ipsum dolor sit amet';
const patternString = 'ipsum';
const result = rabinKarpSearch(sourceString, patternString);

console.log(result); // Output: 6
