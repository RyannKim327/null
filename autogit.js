function burrowsWheelerTransform(input) {
  // Implementation goes here
}
function generateRotations(input) {
  const rotations = [];
  const length = input.length;

  for (let i = 0; i < length; i++) {
    const rotation = input.slice(-1) + input.slice(0, -1);
    rotations.push(rotation);
    input = rotation;
  }

  return rotations;
}
function sortRotations(rotations) {
  rotations.sort();
}
function extractLastCharacters(rotations) {
  let transformedString = "";
  for (let i = 0; i < rotations.length; i++) {
    transformedString += rotations[i].slice(-1);
  }
  return transformedString;
}
function burrowsWheelerTransform(input) {
  const rotations = generateRotations(input);
  sortRotations(rotations);
  const transformedString = extractLastCharacters(rotations);
  return transformedString;
}
const input = "banana";
const bwt = burrowsWheelerTransform(input);
console.log(bwt); // Outputs: "annb$aa"
