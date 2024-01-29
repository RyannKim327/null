function longestCommonPrefix(strings) {
  // ...
}
if (strings.length === 0) {
  return '';
}
let prefix = strings[0];
for (let i = 1; i < strings.length; i++) {
  const currentString = strings[i];
  let j = 0;

  while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
    j++;
  }

  prefix = prefix.slice(0, j);
}
return prefix;
function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    let j = 0;

    while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
      j++;
    }

    prefix = prefix.slice(0, j);
  }

  return prefix;
}
const strings = ['apple', 'app', 'application'];
console.log(longestCommonPrefix(strings)); // Output: 'app'
