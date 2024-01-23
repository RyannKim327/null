function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ""; // empty array, return empty string
  }
  
  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strings[i][j]) {
        prefix = prefix.slice(0, j); // truncate prefix to common part
        break;
      }
    }

    if (prefix === "") {
      break; // no common prefix, exit loop
    }
  }

  return prefix;
}
const strings = ["flower", "flow", "flight"];
const commonPrefix = findLongestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
