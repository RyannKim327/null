function isAnagram(str1, str2) {
  // Remove non-alphabet characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Sort both strings
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return str1 === str2;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "goodbye")); // false
