function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const len = Math.min(prefix.length, strings[i].length);
    let j = 0;

    while (j < len && prefix[j] === strings[i][j]) {
      j++;
    }

    prefix = prefix.substr(0, j);

    // If prefix becomes an empty string, no need to continue further
    if (prefix === "") {
      return prefix;
    }
  }

  return prefix;
}
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);

console.log(commonPrefix); // Output: "fl"
