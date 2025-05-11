function burrowsWheelerTransform(input: string): { transformed: string; index: number } {
  const length = input.length;
  const rotations = [];

  // Generate all rotations of the input string
  for (let i = 0; i < length; i++) {
    // Rotation by slicing and concatenating
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Build the transformed string by taking the last char of each rotation
  let transformed = '';
  let originalIndex = -1;
  for (let i = 0; i < length; i++) {
    transformed += rotations[i][length - 1];
    if (rotations[i] === input) {
      originalIndex = i;
    }
  }

  return { transformed, index: originalIndex };
}
