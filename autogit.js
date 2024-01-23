function longestCommonPrefix(strings) {
  if (strings.length === 0) return '';

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];

    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== currentString[j] || j === currentString.length) {
        prefix = prefix.slice(0, j); // Update prefix to exclude non-matching characters
        break;
      }
    }

    if (prefix.length === 0) break; // No common prefix found, exit the loop
  }

  return prefix;
}

// Usage example:
const strings = ['apple', 'app', 'application', 'aptitude'];
console.log(longestCommonPrefix(strings)); // Output: 'app'
