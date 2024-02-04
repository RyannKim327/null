function burrowsWheelerTransform(text) {
  // Add end of text marker
  text += '$';

  // Generate all rotations of the text
  const rotations = generateRotations(text);

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  let result = '';
  for (const rotation of rotations) {
    result += rotation.charAt(text.length - 1);
  }
  return result;
}
function generateRotations(text) {
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }
  return rotations;
}
const inputText = 'banana';
const bwtResult = burrowsWheelerTransform(inputText);
console.log(bwtResult);
function burrowsWheelerTransform(text) {
  // Add end of text marker
  text += '$';

  // Generate all rotations of the text
  const rotations = generateRotations(text);

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  let result = '';
  for (const rotation of rotations) {
    result += rotation.charAt(text.length - 1);
  }
  return result;
}

function generateRotations(text) {
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }
  return rotations;
}

// Test the BWT function
const inputText = 'banana';
const bwtResult = burrowsWheelerTransform(inputText);
console.log(bwtResult);
