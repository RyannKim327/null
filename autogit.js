function isAnagram(str1, str2) {
  // Convert strings to lowercase
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Remove any non-alphanumeric characters
  const cleanStr1 = lowerStr1.replace(/[^a-z0-9]/g, "");
  const cleanStr2 = lowerStr2.replace(/[^a-z0-9]/g, "");

  // Sort the characters in the strings
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
