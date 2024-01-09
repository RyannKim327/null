function burrowsWheelerTransform(input) {
  function cyclicShift(str) {
    return str.slice(-1) + str.slice(0, -1);
  }
  
  const rotations = [];
  for (let i = 0; i < input.length; i++) {
    rotations.push(input);
    input = cyclicShift(input);
  }
  
  rotations.sort();
  
  let bwtString = '';
  for (let i = 0; i < rotations.length; i++) {
    bwtString += rotations[i].slice(-1);
  }
  
  return bwtString;
}

// Usage example
const inputString = 'banana';
const bwtResult = burrowsWheelerTransform(inputString);
console.log(bwtResult);
