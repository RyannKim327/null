function burrowsWheelerTransform(input) {
  // Add end of text marker
  input += '\0';

  // Generate all rotations
  var rotations = [];
  for (var i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort rotations
  rotations.sort();

  // Extract last characters of each rotation
  var result = '';
  for (var i = 0; i < rotations.length; i++) {
    result += rotations[i][rotations[i].length - 1];
  }

  return result;
}
var input = 'banana';
var transformed = burrowsWheelerTransform(input);
console.log(transformed); // Outputs: 'annb\0aa'
