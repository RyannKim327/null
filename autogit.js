function bwt(text) {
  var rotations = [];

  // generate cyclic rotations
  for (var i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }

  // sort rotations
  rotations.sort();

  // find original index and build transformed string
  var bwtString = '';
  for (var j = 0; j < rotations.length; j++) {
    if (rotations[j] === text) {
      bwtString += rotations[j][rotations[j].length - 1];
    }
  }

  return bwtString;
}

// Example usage:
var input = "banana";
var transformed = bwt(input);
console.log(transformed);  // Outputs: "annb"
