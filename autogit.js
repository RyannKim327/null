function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  let prefix = '';
  const firstString = strings[0];

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];

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
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: 'fl'
