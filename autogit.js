function bwt(text) {
  // Generate all rotations of the text
  let rotations = [];
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }
  
  // Sort the rotations lexicographically
  rotations.sort();
  
  // Extract the last character of each rotation
  let transformed = '';
  for (let i = 0; i < rotations.length; i++) {
    transformed += rotations[i][text.length - 1];
  }
  
  return transformed;
}
// Input text for transformation
let text = 'banana';

// Perform the Burrows-Wheeler Transform
let transformed = bwt(text);

// Output the transformed text
console.log(transformed);
