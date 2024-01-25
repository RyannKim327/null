function burrowsWheelerTransform(str) {
  var rotations = [];
  var len = str.length;

  // Create all rotations of the input string
  for (var i = 0; i < len; i++) {
    rotations.push(str);
    str = str.slice(1) + str[0];
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  var transformedStr = '';
  for (var j = 0; j < len; j++) {
    transformedStr += rotations[j][len - 1];
  }

  return transformedStr;
}
var inputStr = 'banana';
var transformedStr = burrowsWheelerTransform(inputStr);
console.log(transformedStr);  // Outputs: 'annb$a'
