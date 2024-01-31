function areAnagrams(str1, str2) {
  // convert to lowercase and remove whitespace
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // split and sort the characters
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// example usage
const string1 = 'Listen';
const string2 = 'Silent';

console.log(areAnagrams(string1, string2)); // Output: true
