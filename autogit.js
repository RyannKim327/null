function bwt(input) {
  // Implementation goes here
}
function bwt(input) {
  const rotations = [];
  const len = input.length;
  
  for (let i = 0; i < len; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  // ...
}
function bwt(input) {
  const rotations = [];
  const len = input.length;
  
  for (let i = 0; i < len; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  rotations.sort();
  
  // ...
}
function bwt(input) {
  const rotations = [];
  const len = input.length;
  
  for (let i = 0; i < len; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  rotations.sort();
  
  let bwtString = '';
  for (let i = 0; i < len; i++) {
    bwtString += rotations[i][len - 1];
  }
  
  // ...
}
function bwt(input) {
  const rotations = [];
  const len = input.length;
  
  for (let i = 0; i < len; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  rotations.sort();
  
  let bwtString = '';
  for (let i = 0; i < len; i++) {
    bwtString += rotations[i][len - 1];
  }
  
  return bwtString;
}
const input = 'banana';
const transformed = bwt(input);
console.log(transformed);  // Outputs: 'annb$aa'
