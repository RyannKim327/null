function bwtTransform(text) {
  // Concatenate a special end-of-text character
  const input = text + '$';

  // Generate all rotations of the input text
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    const rotation = input.slice(i) + input.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of the sorted rotations to get the transformed text
  let transformedText = '';
  for (let i = 0; i < rotations.length; i++) {
    transformedText += rotations[i][input.length - 1];
  }

  return transformedText;
}
// Example usage
const inputText = 'banana';
const transformedText = bwtTransform(inputText);
console.log(transformedText);
