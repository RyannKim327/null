function burrowsWheelerTransform(input) {
  // Create all rotations of the input string
  const rotations = [];
  const length = input.length;
  for (let i = 0; i < length; i++) {
    rotations.push(input);
    input = input.slice(1) + input[0];
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last character of each rotation
  let transformedString = '';
  for (let i = 0; i < length; i++) {
    transformedString += rotations[i][length - 1];
  }

  // Find the index of the original input string in the sorted rotations
  const originalIndex = rotations.indexOf(input);
  
  // Return the transformed string and the original index
  return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(input, originalIndex) {
  const length = input.length;

  // Create a matrix to store the transformed string in each iteration
  const matrix = [];
  for (let i = 0; i < length; i++) {
    matrix[i] = new Array(length);
  }

  // Fill the matrix with the transformed string
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrix[j][i] = input[j];
    }
    input = sortString(input);
  }

  // Sort the matrix lexicographically
  matrix.sort();

  // Extract the original input string from the matrix
  let originalString = '';
  for (let i = 0; i < length; i++) {
    originalString += matrix[i][originalIndex];
  }

  return originalString;
}

function sortString(input) {
  // Sorts a string
  return input.split('').sort().join('');
}
const input = 'banana';
const bwtResult = burrowsWheelerTransform(input);
console.log('Transformed string:', bwtResult.transformedString);
console.log('Original index:', bwtResult.originalIndex);

const inverseResult = inverseBurrowsWheelerTransform(bwtResult.transformedString, bwtResult.originalIndex);
console.log('Inverse transform:', inverseResult);
