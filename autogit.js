function rotateString(str) {
  const rotations = [str];

  for (let i = 1; i < str.length; i++) {
    str = str.slice(1) + str[0]; // Rotate the string
    rotations.push(str);
  }

  return rotations;
}
function generateBWTMatrix(str) {
  const rotations = rotateString(str);
  rotations.sort();

  return rotations;
}
function extractBWT(matrix) {
  return matrix.map((rotation) => rotation.slice(-1)).join('');
}
const input = 'banana';
const matrix = generateBWTMatrix(input);
const bwt = extractBWT(matrix);

console.log(`Input: ${input}`);
console.log(`BWT: ${bwt}`);
Input: banana
BWT: annb$aa
