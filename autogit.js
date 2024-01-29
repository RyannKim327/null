function prepareString(str) {
  return str.replace(/\s/g, '').toLowerCase();
}
function sortString(str) {
  return str.split('').sort().join('');
}
function areAnagrams(str1, str2) {
  const prepStr1 = prepareString(str1);
  const prepStr2 = prepareString(str2);
  const sortedStr1 = sortString(prepStr1);
  const sortedStr2 = sortString(prepStr2);
  
  return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
listen and silent are anagrams.
