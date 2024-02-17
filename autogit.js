function areAnagrams(str1, str2) {
  // Clean and lowercase the input strings
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]+/g, '').split('').sort().join('');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]+/g, '').split('').sort().join('');

  // Compare the cleaned and sorted strings
  return cleanStr1 === cleanStr2;
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
