function bwt(input) {
  // ...
}
function rotate(str) {
  const rotations = [];
  for (let i = 0; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }
  return rotations;
}
function bwt(input) {
  const rotations = rotate(input).sort();
  // ...
}
function bwt(input) {
  const rotations = rotate(input).sort();
  const transformed = rotations.map((rotation) => rotation.slice(-1)).join('');
  const originalIndex = rotations.indexOf(input);
  // ...
}
function bwt(input) {
  const rotations = rotate(input).sort();
  const transformed = rotations.map((rotation) => rotation.slice(-1)).join('');
  const originalIndex = rotations.indexOf(input);
  return { transformed, originalIndex };
}
const input = 'hello world';
const { transformed, originalIndex } = bwt(input);
console.log('Transformed:', transformed);
console.log('Original Index:', originalIndex);
