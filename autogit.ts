function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
  const n = input.length;
  const rotations: string[] = [];

  // Generate all rotations of the input string
  for (let i = 0; i < n; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Build the transformed string by taking the last char from each rotation
  let transformed = '';
  let index = 0;

  for (let i = 0; i < n; i++) {
    transformed += rotations[i][n - 1];
    if (rotations[i] === input) {
      index = i;  // Save the index of the original string
    }
  }

  return { transformed, index };
}

// Example usage:
const inputString = "banana";
const result = burrowsWheelerTransform(inputString);
console.log(`Transformed: ${result.transformed}, Index: ${result.index}`);
// Output: Transformed: annb$aa, Index: 3 (if you append a terminator symbol like $)
const result = burrowsWheelerTransform(inputString + '$');
