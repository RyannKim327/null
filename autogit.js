function burrowsWheelerTransform(input) {
  // Step 1: Generate all cyclic rotations of the input string
  var rotations = [];
  for (var i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Step 2: Sort the rotations lexicographically
  rotations.sort();

  // Step 3: Extract the last characters of each rotation
  var transformed = "";
  for (var i = 0; i < rotations.length; i++) {
    transformed += rotations[i][input.length - 1];
  }

  // Step 4: Find the original string and its index in the transformed string
  var originalString = "";
  var originalIndex = -1;
  for (var i = 0; i < transformed.length; i++) {
    if (transformed[i] === input[0]) {
      originalString = transformed.slice(i) + transformed.slice(0, i);
      originalIndex = i;
      break;
    }
  }

  // Step 5: Return the transformed string and the index of the original string
  return {
    transformed: transformed,
    originalString: originalString,
    originalIndex: originalIndex,
  };
}
var input = "banana";
var result = burrowsWheelerTransform(input);
console.log("Transformed: " + result.transformed);
console.log("Original String: " + result.originalString);
console.log("Original Index: " + result.originalIndex);
