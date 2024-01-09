function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  let prefix = strings[0];
  
  for (let i = 1; i < strings.length; i++) {
    let j = 0;
    while (j < prefix.length && j < strings[i].length && prefix[j] === strings[i][j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === "") {
      return "";
    }
  }
  
  return prefix;
}
const strings = ["flower", "flow", "flight"];
const longestCommonPrefix = findLongestCommonPrefix(strings);
console.log(longestCommonPrefix); // Output: "fl"
