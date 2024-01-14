function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Sort the characters in the strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(isAnagram(string3, string4)); // Output: false
