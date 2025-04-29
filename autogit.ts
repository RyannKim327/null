function bwtTransform(input: string): string {
  const len = input.length;
  const rotations: string[] = [];

  // Generate all rotations
  for (let i = 0; i < len; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort rotations lexicographically
  rotations.sort();

  // Build the BWT by taking the last character of each rotation
  const lastColumn = rotations.map(rotation => rotation.charAt(rotation.length - 1));

  return lastColumn.join('');
}

// Example:
const input = "BANANA";
const transformed = bwtTransform(input);
console.log(transformed); // Output: "ANNB$AA" (if appended with terminator "$")
function bwtTransformWithTerminator(input: string): string {
  const inputWithTerminator = input + '$'; // Append terminator
  const len = inputWithTerminator.length;
  const rotations: string[] = [];

  for (let i = 0; i < len; i++) {
    const rotation = inputWithTerminator.slice(i) + inputWithTerminator.slice(0, i);
    rotations.push(rotation);
  }

  rotations.sort();

  const lastColumn = rotations.map(rotation => rotation.charAt(rotation.length - 1));
  return lastColumn.join('');
}

console.log(bwtTransformWithTerminator("BANANA")); // Example output
