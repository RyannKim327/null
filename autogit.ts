function bwtTransform(input: string): string {
  const length = input.length;
  // Generate all rotations
  const rotations: string[] = [];
  for (let i = 0; i < length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }
  // Sort rotations lexicographically
  rotations.sort();

  // Construct the BWT result by taking the last character of each rotation
  const result = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');
  return result;
}

// Example usage:
const inputString = "banana";
console.log(bwtTransform(inputString)); // Output should be "annb$aa" with proper terminator
