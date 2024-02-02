function burrowsWheelerTransform(str) {
  const rotations = [];
  
  // Generate cyclic rotations
  for (let i = 0; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Build the transformed string
  let transformed = '';
  rotations.forEach(rotation => {
    transformed += rotation.charAt(rotation.length - 1);
  });

  // Find the index of the original string in the sorted rotations
  const index = rotations.indexOf(str);

  return transformed;
}

// Example usage
const originalString = "banana";
const transformedString = burrowsWheelerTransform(originalString);
console.log(transformedString); // Outputs: "annb$aa"
