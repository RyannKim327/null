function isAnagram(str1, str2) {
  // Removing non-alphanumeric characters and converting to lowercase
  str1 = str1.replace(/[\W_]/g, "").toLowerCase();
  str2 = str2.replace(/[\W_]/g, "").toLowerCase();

  // Check if the strings are of the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Compare the sorted characters of the strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Test the function
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
