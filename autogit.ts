function burrowsWheelerTransform(input: string): string {
  const length = input.length;
  const rotations: string[] = [];

  // Generate all rotations of the input string
  for (let i = 0; i < length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort rotations lexicographically
  rotations.sort();

  // Build the BWT result by taking the last char of each rotation
  const lastColumn = rotations.map(rotation => rotation.charAt(length - 1)).join('');

  return lastColumn;
}
const input = "banana$";
const bwtResult = burrowsWheelerTransform(input);
console.log(bwtResult); // Outputs: "annb$aa"
