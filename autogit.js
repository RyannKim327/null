function longestCommonPrefix(strings) {
  let commonPrefix = '';

  if (strings.length === 0) {
    return commonPrefix;
  }

  commonPrefix = strings[0];

  for (let i = 0; i < commonPrefix.length; i++) {
    for (let j = 1; j < strings.length; j++) {
      if (commonPrefix[i] !== strings[j][i] || i === strings[j].length) {
        return commonPrefix;
      }
    }
    commonPrefix += strings[0][i];
  }

  return commonPrefix;
}

// Example usage:
const inputStrings = ['apple', 'application', 'appstore'];
const result = longestCommonPrefix(inputStrings);
console.log(result); // Output: 'app'
