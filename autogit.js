function findCommonPrefix(str1, str2) {
  let result = '';
  const length = Math.min(str1.length, str2.length);
  
  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      result += str1[i];
    } else {
      break;
    }
  }
  
  return result;
}
function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    prefix = findCommonPrefix(prefix, strings[i]);
    
    if (prefix === '') {
      break;
    }
  }

  return prefix;
}
const strings = ['javascript', 'java', 'javabeans'];
console.log(longestCommonPrefix(strings)); // Output: 'java'
