function burrowsWheelerTransform(input) {
  // Generate all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Retrieve the last character of each rotation
  const bwt = rotations.map(rotation => rotation.charAt(rotation.length - 1));

  // Return the BWT string
  return bwt.join('');
}
const input = 'banana';
const bwt = burrowsWheelerTransform(input);
console.log('BWT:', bwt);
function inverseBurrowsWheelerTransform(bwt) {
  // Create a list of characters from the BWT string
  const chars = bwt.split('');

  // Initialize an empty matrix to represent the sorted BWT string
  const sortedMatrix = chars.map(_ => []);

  // Fill in the sorted matrix
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      sortedMatrix[j].unshift(chars[j]);
      sortedMatrix[j].sort();
    }
  }

  // Find the original string in the sorted matrix
  const originalIndex = chars.indexOf('$');
  let originalString = '';

  // Reconstruct the original string from the sorted matrix
  for (let i = 0; i < chars.length - 1; i++) {
    const row = sortedMatrix[originalIndex];
    const char = row.shift();
    originalIndex = chars.indexOf(char);
    originalString += char;
  }

  // Return the original string
  return originalString;
}
const originalString = inverseBurrowsWheelerTransform(bwt);
console.log('Original String:', originalString);
