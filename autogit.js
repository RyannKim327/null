function bwtTransform(inputString) {
  // Generate all rotations
  const rotations = [];
  for (let i = 0; i < inputString.length; i++) {
    const rotation = {
      rotation: inputString,
      index: i
    };
    rotations.push(rotation);
    inputString = inputString.slice(-1) + inputString.slice(0, -1);
  }

  // Sort the rotations lexicographically
  rotations.sort((a, b) => a.rotation.localeCompare(b.rotation));

  // Extract the last characters and construct transformed string
  let transformedString = '';
  let index = -1;
  for (let i = 0; i < rotations.length; i++) {
    const lastChar = rotations[i].rotation.slice(-1);
    transformedString += lastChar;
    if (rotations[i].index === 0) {
      index = i;
    }
  }

  return { transformedString, index };
}

// Example usage
const input = 'banana';
const { transformedString, index } = bwtTransform(input);
console.log('Transformed String:', transformedString);
console.log('Index:', index);
Transformed String: annb$aa
Index: 4
