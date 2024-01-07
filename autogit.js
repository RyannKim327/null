function bwt(str) {
  // Implement the BWT algorithm here
}
function bwt(str) {
  const rotations = [str];
  
  // Add all the rotations of the input string to the `rotations` array
  for (let i = 1; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }
}
function bwt(str) {
  const rotations = [str];
  
  for (let i = 1; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }
  
  rotations.sort();
}
function bwt(str) {
  const rotations = [str];
  
  for (let i = 1; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }
  
  rotations.sort();
  
  let transformedStr = '';
  for (const rotation of rotations) {
    transformedStr += rotation.slice(-1);
  }
  
  return transformedStr;
}
const input = 'banana';
const transformed = bwt(input);
console.log(transformed);
