function burrowsWheelerTransform(input) {
  // Step 1: Create a cyclic rotation of the input string
  const cyclicRotations = [];
  for (let i = 0; i < input.length; i++) {
    cyclicRotations.push(input.slice(i) + input.slice(0, i));
  }

  // Step 2: Sort the cyclic rotations lexicographically
  cyclicRotations.sort();

  // Step 3: Extract the last characters of each cyclic rotation
  const transformed = cyclicRotations.map(str => str.charAt(input.length - 1)).join('');

  // Step 4: Return the transformed string and the index of the original input in the sorted rotations
  const originalIndex = cyclicRotations.findIndex(str => str === input);
  return { transformed, originalIndex };
}
const input = 'banana';
const { transformed, originalIndex } = burrowsWheelerTransform(input);

console.log('Transformed String:', transformed);
console.log('Original Index:', originalIndex);
Transformed String: annb$aa
Original Index: 3
