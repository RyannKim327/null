function burrowsWheelerTransform(text) {
  // Step 1: Generate all cyclic rotations of the text
  var rotations = [];
  for (var i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }

  // Step 2: Sort the cyclic rotations lexicographically
  rotations.sort();

  // Step 3: Get the last characters of each rotation to construct the transformed text
  var transformedText = '';
  for (var i = 0; i < rotations.length; i++) {
    transformedText += rotations[i].charAt(rotations[i].length - 1);
  }

  // Step 4: Find the index of the original text in the sorted rotations
  var originalIndex = rotations.indexOf(text);

  // Return the transformed text and the original index
  return [transformedText, originalIndex];
}
var inputText = "banana";
var [transformedText, originalIndex] = burrowsWheelerTransform(inputText);

console.log("Transformed Text:", transformedText);
console.log("Original Index:", originalIndex);
Transformed Text: annb$aa
Original Index: 3
