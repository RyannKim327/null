function burrowsWheelerTransform(input) {
  // Creating all rotations of the input string
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }
  
  // Sorting the rotations in lexicographical order
  rotations.sort();
  
  // Extracting the last characters of each rotation
  let transformedString = '';
  for (let rotation of rotations) {
    transformedString += rotation.charAt(rotation.length - 1);
  }
  
  return transformedString;
}
const inputString = 'banana';
const transformedString = burrowsWheelerTransform(inputString);
console.log(transformedString);
