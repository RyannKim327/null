function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
  
  // Sort the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');
  
  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Testing the function
const string1 = "listen";
const string2 = "silent";
const string3 = "hello";
console.log(areAnagrams(string1, string2));  // Output: true
console.log(areAnagrams(string1, string3));  // Output: false
