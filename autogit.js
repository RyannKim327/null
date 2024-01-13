function burrowsWheelerTransform(input) {
  // Step 1: Generate all cyclic rotations
  const rotations = [];
  const length = input.length;
  for (let i = 0; i < length; i++) {
    rotations.push(input.substring(i) + input.substring(0, i));
  }

  // Step 2: Sort the cyclic rotations
  rotations.sort();

  // Step 3: Extract the last characters of each sorted rotation
  let transformed = '';
  for (let i = 0; i < length; i++) {
    transformed += rotations[i][length - 1];
  }

  // Step 4: Find the index of the original string in the sorted rotations
  const indexOfOriginal = rotations.indexOf(input);

  return { transformed, indexOfOriginal };
}
const originalString = "banana"; // Replace with your input
const { transformed, indexOfOriginal } = burrowsWheelerTransform(originalString);
console.log("Transformed String:", transformed);
console.log("Index of Original String:", indexOfOriginal);
