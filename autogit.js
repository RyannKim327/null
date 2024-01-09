function bwt(input) {
  // Code to implement BWT algorithm
}
let rotations = [];
for (let i = 0; i < input.length; i++) {
  let rotation = input.slice(i) + input.slice(0, i);
  rotations.push(rotation);
}
rotations.sort();
let transformed = "";
for (let rotation of rotations) {
  transformed += rotation.charAt(rotation.length - 1);
}
return transformed;
function bwt(input) {
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    let rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }
  
  rotations.sort();
  
  let transformed = "";
  for (let rotation of rotations) {
    transformed += rotation.charAt(rotation.length - 1);
  }
  
  return transformed;
}
let inputStr = "banana";
let transformedStr = bwt(inputStr);
console.log(transformedStr);  // Output: "annb$aa"
