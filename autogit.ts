function burrowsWheelerTransform(input: string): { transformed: string, originalIndex: number } {
  const n = input.length;

  // Generate all rotations of the string
  const rotations = [];
  for (let i = 0; i < n; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Find the index of the original string in the sorted rotations
  const originalIndex = rotations.indexOf(input);

  // Construct the BWT by taking the last chars of each rotation
  const transformed = rotations.map(str => str.charAt(n - 1)).join('');

  return { transformed, originalIndex };
}
const input = "banana$";
const { transformed, originalIndex } = burrowsWheelerTransform(input);

console.log("Input:", input);
console.log("BWT:", transformed);
console.log("Original index:", originalIndex);
