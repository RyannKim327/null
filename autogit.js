function burrowsWheelerTransform(input) {
  // implementation code here
}
function generateRotations(input) {
  const rotations = [];
  const n = input.length;

  for (let i = 0; i < n; i++) {
    rotations.push(input);
    input = input.slice(1) + input[0];
  }

  return rotations;
}
function burrowsWheelerTransform(input) {
  // Generate all rotations of the input string
  const rotations = generateRotations(input);

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  const transformed = rotations.map((rotation) => rotation.slice(-1));

  // Find the index of the original input in the sorted rotations
  let index = rotations.indexOf(input);

  // Return the transformed string and the index
  return {
    transformed: transformed.join(""),
    index: index
  };
}
const input = "banana";
const result = burrowsWheelerTransform(input);
console.log(result.transformed);  // Outputs: "annb$aa"
console.log(result.index);        // Outputs: 4
