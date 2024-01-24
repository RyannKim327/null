function bwt(input) {
  // Step 1: Create a matrix
  let matrix = [];
  for (let i = 0; i < input.length; i++) {
    matrix.push(input.slice(i) + input.slice(0, i));
  }
  
  // Step 2: Sort the matrix
  matrix.sort();
  
  // Step 3: Take the last characters of each matrix row
  let transformed = "";
  for (let i = 0; i < matrix.length; i++) {
    transformed += matrix[i][input.length - 1];
  }
  
  // Step 4: Find the original string's index in the transformed string
  let index = matrix.indexOf(input);
  
  // Return the transformed string and the original index
  return { transformed, index };
}
let input = "banana";
let result = bwt(input);
console.log("Original:", input);
console.log("Transformed:", result.transformed);
console.log("Index:", result.index);
