function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    let j = 0;

    while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix === '') {
      return '';
    }
  }

  return prefix;
}

// Example usage:
const strings = ['hello', 'heaven', 'helicopter'];
console.log(longestCommonPrefix(strings)); // Output: 'he'
