function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }
  
  if (strings.length === 1) {
    return strings[0];
  }
  
  strings.sort();
  const firstString = strings[0];
  const lastString = strings[strings.length - 1];
  
  let prefix = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === lastString[i]) {
      prefix += firstString[i];
    } else {
      break;
    }
  }
  
  return prefix;
}

// Example usage:
const strings = ['flower', 'flow', 'flight'];
const longestPrefix = findLongestCommonPrefix(strings);
console.log(longestPrefix); // Output: 'fl'
