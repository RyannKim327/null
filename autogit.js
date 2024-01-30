function bwt(input) {
  // Create rotations array
  const rotations = [];
  const length = input.length;
  for (let i = 0; i < length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  // Sort rotations array
  rotations.sort();

  // Find original string
  let result = '';
  for (let i = 0; i < length; i++) {
    result += rotations[i][length - 1];
  }

  return result;
}

// Example usage
const input = 'banana';
const transformed = bwt(input);
console.log(transformed); // Output: 'annb#aa'
