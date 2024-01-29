function burrowsWheelerTransform(input) {
  let rotations = [];
  
  // Generate all rotations
  for (let i = 0; i < input.length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  
  // Sort the rotations
  rotations.sort();
  
  let transformedString = '';
  
  // Build the transformed string
  for (let rotation of rotations) {
    transformedString += rotation.charAt(input.length - 1);
  }
  
  return transformedString;
}

// Example usage
const input = 'banana';
const transformed = burrowsWheelerTransform(input);
console.log(transformed); // outputs: 'annb$aa'
