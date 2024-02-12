function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove spaces/punctuation
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Sort both strings alphabetically
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Testing the function
const string1 = 'Listen';
const string2 = 'Silent';
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = 'Triangle';
const string4 = 'Integral';
console.log(areAnagrams(string3, string4)); // Output: true

const string5 = 'Eleven plus two';
const string6 = 'Twelve plus one';
console.log(areAnagrams(string5, string6)); // Output: true

const string7 = 'Hello';
const string8 = 'World';
console.log(areAnagrams(string7, string8)); // Output: false
