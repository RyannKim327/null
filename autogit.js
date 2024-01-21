function burrowsWheelerTransform(text) {
  // Add a sentinel character at the end of the input
  text += '$';

  // Generate all rotations of the input text
  var rotations = [];
  for (var i = 0; i < text.length; i++) {
    var rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last character of each rotation
  var transformedText = rotations.map(rotation => rotation.slice(-1)).join('');

  // Find the index of the original input in the sorted rotations
  var originalIndex = rotations.indexOf(text);

  return {
    transformedText: transformedText,
    originalIndex: originalIndex
  };
}
// Example usage
var text = 'banana';
var result = burrowsWheelerTransform(text);
console.log('Transformed Text:', result.transformedText);
console.log('Original Index:', result.originalIndex);
Transformed Text: annb$aa
Original Index: 4
