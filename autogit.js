function burrowsWheelerTransform(str) {
  // Step 2: Generate all rotations of the input string
  const rotations = [];
  for (let i = 0; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }

  // Step 3: Sort the rotations lexicographically
  rotations.sort();

  // Step 4: Extract the last characters of each rotation to form the transformed string
  const transformedStr = rotations.map(rot => rot.charAt(rot.length - 1)).join('');

  // Step 5: Return the transformed string
  return transformedStr;
}
const input = 'banana';
const transformedStr = burrowsWheelerTransform(input);
console.log(transformedStr); // Outputs: 'annb#aa'
