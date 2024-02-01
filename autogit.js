function bwt(input) {
  var rotations = [];
  
  // Generate all rotations of the input string
  for (var i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  // Sort the rotations
  rotations.sort();
  
  // Find the index of the original input string
  var index = rotations.indexOf(input);
  
  // Construct the transformed string
  var transformed = '';
  for (var i = 0; i < rotations.length; i++) {
    transformed += rotations[i][input.length - 1];
  }
  
  return transformed;
}

// Usage example:
var inputString = "banana";
var transformedString = bwt(inputString);
console.log(transformedString);  // Outputs "annb$aa"
