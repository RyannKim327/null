function burrowsWheelerTransform(input: string): string {
  // Step 1: Generate all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Step 2: Sort rotations lexicographically
  rotations.sort();

  // Step 3: Construct the output by taking the last character of each rotation
  const lastColumn = rotations.map(rotation => rotation.slice(-1)).join('');

  return lastColumn;
}

// Example usage:
const input = "banana$";
console.log(burrowsWheelerTransform(input)); // Outputs: "annb$aa"
