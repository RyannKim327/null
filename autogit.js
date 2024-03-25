function isAnagram(str1, str2) {
  // Remove spaces and punctuation, convert to lowercase, and sort the characters
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  // Check if the sorted strings are equal
  return cleanStr1 === cleanStr2;
}

// Test the function
const str1 = "listen";
const str2 = "silent";
if (isAnagram(str1, str2)) {
  console.log(`${str1} and ${str2} are anagrams.`);
} else {
  console.log(`${str1} and ${str2} are not anagrams.`);
}
