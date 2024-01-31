function findLongestCommonPrefix(strings) {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];

  let prefix = '';

  for (let i = 0; i < strings[0].length; i++) {
    const char = strings[0][i];
    
    for (let j = 1; j < strings.length; j++) {
      if (i >= strings[j].length || strings[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}

// Example usage:
const strings = ['apple', 'app', 'aptitude', 'applicable'];
const commonPrefix = findLongestCommonPrefix(strings);
console.log(`Longest common prefix: ${commonPrefix}`); // Output: "app"
