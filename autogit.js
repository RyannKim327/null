function longestCommonPrefix(strArray) {
  let prefix = '';

  if (!strArray || strArray.length === 0) {
    return prefix;
  }

  strArray.sort(); // Sort the array in lexicographical order

  const refStr = strArray[0]; // Get the first string as the reference

  for (let i = 0; i < refStr.length; i++) {
    const char = refStr[i];

    for (let j = 1; j < strArray.length; j++) {
      if (strArray[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}

// Example usage
const strings = ['apple', 'app', 'aptitude', 'applaud'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'ap'
