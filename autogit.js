function bwtTransform(input) {
  // Append a sentinel character to the input string
  input += '$';

  // Generate all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation to get the BWT result
  let bwt = '';
  for (let i = 0; i < rotations.length; i++) {
    bwt += rotations[i][input.length - 1];
  }

  return bwt;
}
const inputString = 'banana';
const bwtResult = bwtTransform(inputString);
console.log(bwtResult); // Output: 'annb$aa'
