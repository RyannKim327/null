function burrowsWheelerTransform(input: string): string {
  // Append a unique end character that's lexicographically smaller than any other char
  const endChar = '\0';
  const s = input + endChar;

  // Generate all rotations of s
  const rotations: string[] = [];
  for (let i = 0; i < s.length; i++) {
    rotations.push(s.slice(i) + s.slice(0, i));
  }

  // Sort rotations lexicographically
  rotations.sort();

  // The last column is formed by taking last char of each rotation
  let lastColumn = '';
  for (const rotation of rotations) {
    lastColumn += rotation[rotation.length - 1];
  }

  return lastColumn;
}
console.log(burrowsWheelerTransform("banana"));
