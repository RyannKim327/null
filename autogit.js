function areAnagrams(str1, str2) {
  // Remove non-alphabet characters and convert to lowercase
  const sortedStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const sortedStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Convert strings to sorted arrays
  const arr1 = Array.from(sortedStr1).sort();
  const arr2 = Array.from(sortedStr2).sort();

  // Join sorted arrays back into strings and compare
  const sorted1 = arr1.join('');
  const sorted2 = arr2.join('');

  return sorted1 === sorted2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are not anagrams.");
}
