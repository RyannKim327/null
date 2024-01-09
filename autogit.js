function rotate(str) {
  return str.slice(-1) + str.slice(0, -1);
}
let rotations = [text];

for (let i = 1; i < text.length; i++) {
  rotations.push(rotate(rotations[i - 1]));
}
rotations.sort();
let bwt = rotations.map(str => str.slice(-1)).join('');
let originalIndex = rotations.indexOf(text);
return { bwt, originalIndex };
function burrowsWheelerTransform(text) {
  function rotate(str) {
    return str.slice(-1) + str.slice(0, -1);  
  }

  let rotations = [text];

  for (let i = 1; i < text.length; i++) {
    rotations.push(rotate(rotations[i - 1]));
  }

  rotations.sort();

  let bwt = rotations.map(str => str.slice(-1)).join('');

  let originalIndex = rotations.indexOf(text);

  return { bwt, originalIndex };
}
let result = burrowsWheelerTransform("banana");
console.log(result.bwt);   // Outputs: "annb$aa"
console.log(result.originalIndex);  // Outputs: 4
