function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) return '';

  // Initialize the prefix with the first string
  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];

    // Compare prefix with current string character by character
    let j = 0;
    while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
      j++;
    }

    // Update the prefix
    prefix = prefix.substring(0, j);

    // If at any point the prefix becomes empty, no common prefix exists
    if (prefix === '') break;
  }

  return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
