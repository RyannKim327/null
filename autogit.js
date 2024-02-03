function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }
  
  let prefix = "";
  let index = 0;

  // Iterate until all characters at the current index match or end of any string is reached
  while (strings.every(str => index < str.length && str[index] === strings[0][index])) {
    prefix += strings[0][index];
    index++;
  }
  
  return prefix;
}

// Example usage:
const strings = ["apple", "app", "application", "apartment"];
console.log(longestCommonPrefix(strings)); // Output: "ap"
