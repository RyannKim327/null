function areAnagrams(str1, str2) {
  // Convert the strings to lowercase and remove non-alphabetic characters
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  // Sort the characters of both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams('listen', 'silent'));     // Output: true
console.log(areAnagrams('debit card', 'bad credit'));   // Output: true
console.log(areAnagrams('test', 'best'));   // Output: false
