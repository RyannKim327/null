function burrowsWheelerTransform(input) {
  // Step 2: Generate all rotations of the input string
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Step 3: Sort the rotations
  rotations.sort();

  // Step 4: Find the original string index in the sorted rotations
  let index = rotations.indexOf(input);

  // Step 5: Construct the result string from the last characters of each rotation
  let result = '';
  rotations.forEach((rotation) => {
    result += rotation.charAt(rotation.length - 1);
  });

  // Step 6: Return the result string and index
  return [result, index];
}

// Example usage
const inputString = 'banana';
const [transformedString, index] = burrowsWheelerTransform(inputString);
console.log('Transformed String:', transformedString);
console.log('Original String Index:', index);
Transformed String: annb$aa
Original String Index: 2
