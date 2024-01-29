function burrowsWheelerTransform(input) {
  // your code here
}
let rotations = [];
for (let i = 0; i < input.length; i++) {
  input = input.charAt(input.length - 1) + input.slice(0, input.length - 1);
  rotations.push(input);
}
rotations.sort();
let transformedString = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');
let originalIndex = rotations.indexOf(input);
let originalString = rotations[originalIndex - 1];
function burrowsWheelerTransform(input) {
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    input = input.charAt(input.length - 1) + input.slice(0, input.length - 1);
    rotations.push(input);
  }

  rotations.sort();
  let transformedString = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');
  
  let originalIndex = rotations.indexOf(input);
  let originalString = rotations[originalIndex - 1];
  
  return transformedString;
}

// Example usage
let input = "banana";
let transformedString = burrowsWheelerTransform(input);
console.log(transformedString);
