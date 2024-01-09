function areAnagrams(string1, string2) {
  // Convert both strings to lowercase and remove non-alphabetic characters
  string1 = string1.toLowerCase().replace(/[^a-z]/g, '');
  string2 = string2.toLowerCase().replace(/[^a-z]/g, '');

  // Convert strings to arrays of characters
  const array1 = Array.from(string1);
  const array2 = Array.from(string2);

  // Sort the arrays
  array1.sort();
  array2.sort();

  // Compare the sorted arrays
  return array1.join('') === array2.join('');
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
