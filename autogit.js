function bwtTransform(input) {
  // Append EOF (End-of-File) marker
  const text = input + '$';

  // Generate all cyclic rotations of the input string
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    const rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  let output = '';
  for (let i = 0; i < rotations.length; i++) {
    output += rotations[i].charAt(rotations[i].length - 1);
  }

  return output;
}
const input = 'example';
const result = bwtTransform(input);
console.log(result);
