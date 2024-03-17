function checkAnagrams(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the strings are of equal length
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Sort the characters in the strings and check if they are equal
  const sortedStr1 = cleanedStr1.split('').sort().join('');
  const sortedStr2 = cleanedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (checkAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
