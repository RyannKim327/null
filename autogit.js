function findLongestCommonPrefix(strings) {
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];

  let commonPrefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    let j = 0;

    while (j < commonPrefix.length && j < currentString.length && commonPrefix[j] === currentString[j]) {
      j++;
    }

    commonPrefix = commonPrefix.substring(0, j);

    if (commonPrefix === "")
      break;
  }

  return commonPrefix;
}

// Example usage:
const strings = ["apple", "app", "appreciate"];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix);  // Output: "app"
