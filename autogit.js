function bwtTransform(input) {
  // Generate all possible rotations
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations
  rotations.sort();

  // Get the last characters of each rotation
  let bwt = '';
  for (let i = 0; i < rotations.length; i++) {
    bwt += rotations[i][input.length - 1];
  }

  return bwt;
}
let input = 'banana';
let bwtResult = bwtTransform(input);
console.log(bwtResult);
