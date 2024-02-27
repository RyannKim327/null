function burrowsWheelerTransform(input) {
  // Create all rotations of the input string
  let rotations = [];
  for (let i = 0; i < input.length; i++) {
    let rotatedStr = input.slice(i) + input.slice(0, i);
    rotations.push(rotatedStr);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotated string
  let transformed = rotations.map(str => str.charAt(str.length - 1)).join('');

  // Find the original string's index in the sorted rotations
  let originalIndex = rotations.indexOf(input);

  return { transformed, originalIndex };
}

function burrowsWheelerInverse(transformed, originalIndex) {
  let table = new Array(transformed.length);
  for (let i = 0; i < transformed.length; i++) {
    table[i] = { char: transformed[i], index: i };
  }

  // Sort the table
  table.sort((a, b) => a.char.localeCompare(b.char));

  let result = '';
  let current = table[originalIndex];
  while (current.index !== originalIndex) {
    result = table[current.index].char + result;
    current = table[current.index];
  }

  return result;
}

// Example usage
let input = 'banana';
let { transformed, originalIndex } = burrowsWheelerTransform(input);
console.log('Transformed:', transformed);
let original = burrowsWheelerInverse(transformed, originalIndex);
console.log('Original:', original);
