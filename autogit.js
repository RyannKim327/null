function bwtTransform(text) {
  const transformed = [];
  const rotations = [];

  // Generate all rotations
  for (let i = 0; i < text.length; i++) {
    const rotation = text.slice(-1) + text.slice(0, -1);
    rotations.push(rotation);
    text = rotation;
  }

  // Sort rotations lexicographically
  rotations.sort();

  // Find original index in the sorted rotations array
  const originalIndex = rotations.findIndex((rotation) => rotation === text);

  // Take the last character of each rotation in the sorted array
  for (let i = 0; i < rotations.length; i++) {
    transformed.push(rotations[i].slice(-1));
  }

  return transformed.join('');
}
