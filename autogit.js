function areAnagrams(str1, str2) {
  // Remove spaces and special characters, and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Sort the characters
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return str1 === str2;
}
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
