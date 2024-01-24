function areAnagrams(str1, str2) {
  // Step 1: Remove non-alphabetic characters
  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Step 2: Sort the strings
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Step 3: Compare the sorted strings
  return str1 === str2;
}

// Usage example
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
