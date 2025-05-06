function burrowsWheelerTransform(input: string): { bwt: string; index: number } {
  const length = input.length;
  const rotations: string[] = [];

  // Generate rotations
  for (let i = 0; i < length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort rotations lexicographically
  rotations.sort();

  // Construct the BWT string by taking the last char of each rotation
  const bwt = rotations.map(rotation => rotation.charAt(length - 1)).join('');

  // Find the index of the original string in the sorted rotations
  const index = rotations.indexOf(input);

  return { bwt, index };
}
const input = "banana$"; // $ is a special end-of-string marker which is lexicographically smallest
const { bwt, index } = burrowsWheelerTransform(input);
console.log(`BWT: ${bwt}, Index: ${index}`);
