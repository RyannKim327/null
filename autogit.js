function bwtTransform(input) {
  // Step 2: Generate all rotations
  const rotations = [];
  const length = input.length;
  const concatStr = input + input;

  for (let i = 0; i < length; i++) {
    rotations.push(concatStr.substr(i, length));
  }

  // Step 3: Sort rotations
  rotations.sort();

  // Step 5: Construct BWT string
  let bwtString = '';
  for (let i = 0; i < length; i++) {
    bwtString += rotations[i][length - 1];
  }

  return bwtString;
}

// Example usage
const input = 'banana';
const transformed = bwtTransform(input);
console.log(transformed);
annb$aa
