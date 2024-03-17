function isAnagram(str1, str2) {
  // Remove any non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Check if the length of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters of both strings and compare them
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example
var string1 = "listen";
var string2 = "silent";

if (isAnagram(string1, string2)) {
  console.log(string1 + " and " + string2 + " are anagrams.");
} else {
  console.log(string1 + " and " + string2 + " are not anagrams.");
}
