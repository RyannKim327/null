function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('rail safety', 'fairy tales')); // true
console.log(areAnagrams('hello', 'goodbye')); // false
