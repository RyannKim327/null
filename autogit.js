function formatString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
function isAnagram(str1, str2) {
  const formattedStr1 = formatString(str1);
  const formattedStr2 = formatString(str2);

  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  const sortedStr1 = formattedStr1.split('').sort().join('');
  const sortedStr2 = formattedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
