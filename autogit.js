function bwt(text) {
  // Implement BWT algorithm here
}
function getRotations(text) {
  const rotations = [text];
  for (let i = 1; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }
  return rotations;
}
function bwt(text) {
  const rotations = getRotations(text);
}
function bwt(text) {
  const rotations = getRotations(text);
  rotations.sort();
}
function bwt(text) {
  const rotations = getRotations(text);
  rotations.sort();
  
  const transformed = rotations.map(rot => rot.charAt(rot.length - 1)).join('');
  return transformed;
}
function bwt(text) {
  const rotations = getRotations(text);
  rotations.sort();
  
  const transformed = rotations.map(rot => rot.charAt(rot.length - 1)).join('');
  return transformed;
}

// Usage example
const inputText = 'banana';
const transformedText = bwt(inputText);
console.log('Transformed:', transformedText);
