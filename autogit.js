function bwt(input) {
  // BWT implementation goes here
  // Return the transformed string
}
function bwt(input) {
  // Add a sentinel symbol to the input
  const sentinel = '\0';
  const text = input + sentinel;

  // Generate rotations of the input string
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    const rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  const transformed = rotations.map(rotation => rotation.slice(-1));

  // Return the transformed string
  return transformed.join('');
}
const input = 'banana';
const transformed = bwt(input);
console.log(transformed); // Outputs: 'annb$aa'
