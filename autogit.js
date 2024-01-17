function bwt(input) {
  // Add a special end-of-text marker
  input += '$';

  // Generate all possible rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last character of each rotation
  let result = '';
  for (let i = 0; i < rotations.length; i++) {
    result += rotations[i][input.length - 1];
  }

  return result;
}
const inputString = 'banana';
const transformedString = bwt(inputString);
console.log(transformedString);
