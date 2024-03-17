function burrowsWheelerTransform(input) {
  // Add a unique end-of-text symbol
  input += '$';
  
  // Generate all cyclic permutations of the input string
  const rotations = [...input].map((_, index) => input.slice(index) + input.slice(0, index));
  
  // Sort the rotations lexicographically
  const sortedRotations = rotations.sort();
  
  // Extract the last characters of the sorted rotations to form the Burrows-Wheeler transformed string
  const transformedString = sortedRotations.map(rotation => rotation.slice(-1)).join('');
  
  // Find the position of the original input in the sorted rotations to get the index of the original string
  const originalIndex = sortedRotations.indexOf(input);
  
  // Return the transformed string and the index of the original input
  return { transformedString, originalIndex };
}

// Test the implementation
const inputString = 'hello world';
const { transformedString, originalIndex } = burrowsWheelerTransform(inputString);

console.log('Input String:', inputString);
console.log('Transformed String:', transformedString);
console.log('Original Index:', originalIndex);
