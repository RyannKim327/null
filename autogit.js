function burrowsWheelerTransform(input) {
  // Create an array to store the rotations
  const rotations = [];

  // Generate all rotations of the input string
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last character of each rotation
  const transformed = rotations.map(rotation => rotation.charAt(rotation.length - 1));

  // Return the transformed string
  return transformed.join('');
}
const inputString = 'banana';
const transformedString = burrowsWheelerTransform(inputString);
console.log(transformedString);
