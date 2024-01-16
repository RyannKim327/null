function burrowsWheelerTransform(str) {
  // Create an array of rotated strings
  var rotations = [];
  for (var i = 0; i < str.length; i++) {
    var rotatedStr = str.slice(i) + str.slice(0, i);
    rotations.push(rotatedStr);
  }

  // Sort the rotations
  rotations.sort();

  // Extract the last characters of each rotation to form the transformed string
  var transformedStr = '';
  for (var i = 0; i < rotations.length; i++) {
    transformedStr += rotations[i].charAt(rotations[i].length - 1);
  }

  return transformedStr;
}
var inputString = 'banana';
var transformedString = burrowsWheelerTransform(inputString);
console.log(transformedString);
annb$aa
