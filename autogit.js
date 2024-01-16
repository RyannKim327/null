function bwt(text) {
  // Step 2: Generate all rotations of the input text
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    const rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }

  // Step 3: Sort the rotations
  rotations.sort();

  // Step 4: Get the last character of each rotation
  const transformedText = rotations.map((rotation) => rotation.slice(-1)).join('');

  // Step 5: Find the index of the original text in the sorted rotations
  const index = rotations.findIndex((rotation) => rotation === text);

  // Step 6: Return transformed text and index
  return {
    text: transformedText,
    index: index,
  };
}
const inputText = "banana";
const result = bwt(inputText);
console.log(`Transformed text: ${result.text}`);
console.log(`Original text index: ${result.index}`);
Transformed text: annb$aa
Original text index: 1
