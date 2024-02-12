function bwt(input) {
  // Construct an array of all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters from each rotation to construct the BWT result
  const bwtResult = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');
  
  return bwtResult;
}
const inputString = 'banana';
const bwtResult = bwt(inputString);
console.log('BWT Result:', bwtResult);
function bwt(input) {
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  rotations.sort();

  const bwtResult = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');

  return bwtResult;
}

const inputString = 'banana';
const bwtResult = bwt(inputString);
console.log('BWT Result:', bwtResult);
BWT Result: annb$aa
