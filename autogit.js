function burrowsWheelerTransform(input) {
  // Add EOF (End of File) marker to the input
  const text = input + '\0';

  // Create an array to store rotations of the input
  const rotations = [];
  
  // Generate all rotations of the input
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  const transformed = rotations.map((rotation) => rotation.slice(-1));

  // Find the original position/index of the input in the sorted rotations
  const index = rotations.indexOf(text);

  // Return the transformed string and the index
  return [transformed.join(''), index];
}
const input = 'your_input_string';
const [transformed, index] = burrowsWheelerTransform(input);

console.log('Transformed: ', transformed);
console.log('Original Index: ', index);
