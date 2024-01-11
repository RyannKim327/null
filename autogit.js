function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let commonPrefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    let j = 0;

    while (j < commonPrefix.length && j < strings[i].length && commonPrefix[j] === strings[i][j]) {
      j++;
    }

    commonPrefix = commonPrefix.slice(0, j);

    if (commonPrefix === '') {
      break;
    }
  }

  return commonPrefix;
}

// Example usage:
const strings = ['flower', 'flow', 'flight'];
console.log(findLongestCommonPrefix(strings)); // Output: 'fl'
