function areAnagrams(str1, str2) {
  // Remove whitespace and convert to lowercase
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  // Convert strings to character arrays and sort them
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  // Compare the sorted arrays for equality
  return arr1.join("") === arr2.join("");
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are not anagrams.");
}
