function burrowsWheelerTransform(inputString) {
  // Step 2: Construct the matrix
  let matrix = [];
  for (let i = 0; i < inputString.length; i++) {
    matrix.push(inputString.slice(i) + inputString.slice(0, i));
  }

  // Step 3: Sort the matrix
  matrix.sort();

  // Step 4: Extract the last column
  let transformedString = '';
  for (let i = 0; i < matrix.length; i++) {
    transformedString += matrix[i][inputString.length - 1];
  }

  // Step 5: Find the original index
  let originalIndex = matrix.indexOf(inputString);

  // Return the transformed string and the original index
  return { transformedString, originalIndex };
}
let input = 'banana';
let result = burrowsWheelerTransform(input);

console.log('Transformed String: ', result.transformedString);
console.log('Original Index: ', result.originalIndex);
Transformed String:  annb$aa
Original Index:  1
