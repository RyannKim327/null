function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Convert strings to arrays and sort them
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  // Compare the sorted arrays
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log("The strings are anagrams!");
} else {
  console.log("The strings are not anagrams.");
}
