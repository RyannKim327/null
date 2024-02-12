function generateCyclicRotations(str) {
  const rotations = [str];
  for (let i = 1; i < str.length; i++) {
    const rotatedStr = str.slice(-i) + str.slice(0, -i);
    rotations.push(rotatedStr);
  }
  return rotations;
}
function bwt(str) {
  const rotations = generateCyclicRotations(str);
  rotations.sort();
  return rotations.map(rotation => rotation.slice(-1)).join('');
}
function bwt(str) {
  const rotations = generateCyclicRotations(str);
  rotations.sort();
  const transformedStr = rotations.map(rotation => rotation.slice(-1)).join('');
  const originalIndex = rotations.indexOf(str);
  return { transformedStr, originalIndex };
}
const input = 'banana';
const result = bwt(input);
console.log('Transformed string:', result.transformedStr);
console.log('Original string index:', result.originalIndex);
