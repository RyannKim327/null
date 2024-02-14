function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels("Hello, World!"));  // Output: Hll, Wrld!
function removeVowels(str) {
  return str.split('').filter(function(char) {
    return !'aeiouAEIOU'.includes(char);
  }).join('');
}

console.log(removeVowels("Hello, World!"));  // Output: Hll, Wrld!
function removeVowels(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (!'aeiouAEIOU'.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeVowels("Hello, World!"));  // Output: Hll, Wrld!
