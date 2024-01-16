function areAnagrams(str1, str2) {
  // Remove spaces and punctuation, convert to lowercase
  let cleanStr1 = str1.replace(/[^a-z0-9]/g, "").toLowerCase();
  let cleanStr2 = str2.replace(/[^a-z0-9]/g, "").toLowerCase();

  // Sort the strings alphabetically
  let sortedStr1 = cleanStr1.split("").sort().join("");
  let sortedStr2 = cleanStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("Eleven plus two", "Twelve plus one")); // true
