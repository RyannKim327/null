/**
 * Computes the Burrows-Wheeler Transform (BWT) of a given string.
 * @param input - The string to transform.
 * @returns The BWT of the input string.
 */
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

  // Construct the BWT by taking the last character of each rotation
  const bwt = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');
  return bwt;
}

// Example usage:
const inputString = "banana$"; // The dollar sign is often used as a unique end-of-string marker
const transformed = burrowsWheelerTransform(inputString);
console.log(`BWT of "${inputString}": ${transformed}`);
BWT of "banana$": annb$aa
