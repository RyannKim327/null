function bwt(input) {
  // Perform the BWT
}
function createPermutations(input) {
  let permutations = [];
  for (let i = 0; i < input.length; i++) {
    let rotation = input.slice(i) + input.slice(0, i);
    permutations.push(rotation);
  }
  return permutations;
}
function sortPermutations(permutations) {
  return permutations.sort();
}
function extractLastColumn(sortedPermutations) {
  let lastColumn = '';
  for (let i = 0; i < sortedPermutations.length; i++) {
    lastColumn += sortedPermutations[i][sortedPermutations[i].length - 1];
  }
  return lastColumn;
}
function getBWT(input) {
  let permutations = createPermutations(input);
  let sortedPermutations = sortPermutations(permutations);
  let transformedString = extractLastColumn(sortedPermutations);
  return transformedString;
}
let inputString = 'your input string';
let transformedString = bwt(inputString);
console.log(transformedString);
