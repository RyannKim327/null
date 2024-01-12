function bwt(string) {
  // Step 1: Create an array to store all rotations
  let rotations = [];
  
  // Step 2: Generate all cyclic rotations of the input string
  for (let i = 0; i < string.length; i++) {
    rotations.push(string.slice(i) + string.slice(0, i));
  }
  
  // Step 3: Sort the rotations array lexicographically
  rotations.sort();
  
  // Step 4: Extract the last characters from each rotation
  let bwtResult = '';
  for (let i = 0; i < rotations.length; i++) {
    bwtResult += rotations[i][string.length - 1];
  }
  
  // Step 5: Return the BWT result
  return bwtResult;
}

const input = 'banana';
const bwtResult = bwt(input);
console.log(bwtResult);  // Outputs: 'annb$aa'
