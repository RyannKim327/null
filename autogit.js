function bwt(input) {

}
function rotate(input) {
  return input.slice(-1) + input.slice(0, -1);
}
function rotations(input) {
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(rotate(input));
    input = rotate(input);
  }
  return rotations;
}
function bwt(input) {
  let rotationsArray = rotations(input);
  let sortedArray = rotationsArray.sort();
  let bwtOutput = "";
  for (let i = 0; i < sortedArray.length; i++) {
    bwtOutput += sortedArray[i].slice(-1);
  }
  return bwtOutput;
}
let inputString = "banana";
console.log(bwt(inputString)); // Output: "annb$aa"
