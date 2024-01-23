function areAnagrams(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Remove non-alphabetic characters
  str1 = str1.replace(/[^a-z]/g, "");
  str2 = str2.replace(/[^a-z]/g, "");

  // Sort the strings
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2));  // Output: true

const string3 = "night";
const string4 = "thing";
console.log(areAnagrams(string3, string4));  // Output: false
