function isAnagram(str1, str2) {
  // Clean the strings and convert them to lowercase
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Sort the characters in the strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
  console.log("The strings are anagrams!");
} else {
  console.log("The strings are not anagrams.");
}
