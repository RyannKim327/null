function burrowsWheelerTransform(input: string): string {
  // Generate all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Construct the last column by taking the last character of each rotation
  const lastColumn = rotations.map(rotation => rotation.slice(-1)).join('');

  return lastColumn;
}

// Example usage:
const inputStr = "BANANA";
console.log(burrowsWheelerTransform(inputStr));  // Output: "ANNB$A" (assuming input ended with a unique end marker)
