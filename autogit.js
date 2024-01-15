function burrowsWheelerTransform(text) {
  // Add end of text marker
  text += '$';

  // Create cyclic rotations of the text
  let rotations = [];
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  let transformedText = rotations.map(rotation => rotation.slice(-1));

  // Find the original text index
  let index = rotations.indexOf(text);

  // Return the transformed text and index
  return { text: transformedText.join(''), index };
}
let inputText = 'banana';
let result = burrowsWheelerTransform(inputText);

console.log('Transformed Text:', result.text);
console.log('Index:', result.index);
