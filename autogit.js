function areAnagrams(str1, str2) {
  // Remove spaces and punctuation, convert to lowercase
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Convert strings to arrays, sort the arrays, join back into strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); // Output: false
