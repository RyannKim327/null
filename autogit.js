function findLongestCommonPrefix(strs) {
  let prefix = "";

  if (strs === null || strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
}
const strings = ["apple", "app", "applause"];
const longestPrefix = findLongestCommonPrefix(strings);

console.log(longestPrefix); // Output: "app"
