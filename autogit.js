function longestCommonPrefix(strings) {
  let prefix = '';

  if (strings.length === 0 || strings[0].length === 0) {
    return prefix;
  }

  strings.sort();
  const firstStr = strings[0];
  const lastStr = strings[strings.length - 1];
  const minLength = Math.min(firstStr.length, lastStr.length);

  for (let i = 0; i < minLength; i++) {
    if (firstStr.charAt(i) === lastStr.charAt(i)) {
      prefix += firstStr.charAt(i);
    } else {
      return prefix;
    }
  }

  return prefix;
}

// Example usage:
const strings = ['apple', 'app', 'application', 'aptitude'];
console.log(longestCommonPrefix(strings)); // Output: "app"
