function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Convert the strings to arrays and sort them
  const sortedStr1 = cleanStr1.split("").sort();
  const sortedStr2 = cleanStr2.split("").sort();

  // Compare the sorted arrays
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
