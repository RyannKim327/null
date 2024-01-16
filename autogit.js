function bwt(input) {
  // Step 1: Append EOT character
  input += '\u0003'; // EOT character

  // Step 2: Generate rotations
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Step 3: Sort rotations in lexicographic order
  rotations.sort();

  // Step 4: Extract last characters from rotations
  const bwt = rotations.map(rotation => rotation.slice(-1)).join('');

  // Step 5: Find index of original input
  const index = rotations.findIndex(rotation => rotation.slice(-1) === '\u0003');

  // Step 6: Return transformed string
  return bwt;
}

// Example usage
const input = 'banana';
const transformed = bwt(input);
console.log(transformed); // Outputs: 'annb\u0003aa'
