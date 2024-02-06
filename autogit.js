function burrowsWheelerTransform(input) {
  // Step 1: Generate the list of rotations
  const rotations = [];
  const length = input.length;
  for (let i = 0; i < length; i++) {
    // Rotate the input string and store the result
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Step 2: Sort the rotations lexicographically
  rotations.sort();

  // Step 3: Extract the last characters of each rotation to get the transformed string
  let transformedString = '';
  for (let i = 0; i < length; i++) {
    transformedString += rotations[i][length - 1];
  }

  // Step 4: Find the index of the original string in the sorted rotations
  const originalIndex = rotations.indexOf(input);

  // Return the transformed string and the original index
  return { transformedString, originalIndex };
}
const input = "your input string";
const { transformedString, originalIndex } = burrowsWheelerTransform(input);

console.log("Transformed string:", transformedString);
console.log("Original index:", originalIndex);
