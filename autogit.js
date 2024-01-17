function areAnagrams(str1, str2) {
  // Step 1: Remove whitespace and non-alphabetic characters
  const regex = /[^a-zA-Z0-9]/g;
  const sortedStr1 = str1.replace(regex, '').toLowerCase();
  const sortedStr2 = str2.replace(regex, '').toLowerCase();

  // Step 2: Sort the strings
  const sorted1 = sortedStr1.split('').sort().join('');
  const sorted2 = sortedStr2.split('').sort().join('');

  // Step 3: Compare the sorted strings
  return sorted1 === sorted2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // true
