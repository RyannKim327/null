function bwt(input) {
  const rotations = [];
  const len = input.length;

  for (let i = 0; i < len; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }

  rotations.sort();

  let encoded = "";
  for (let i = 0; i < len; i++) {
    encoded += rotations[i][len - 1];
  }

  const originalIndex = rotations.indexOf(input);

  return { encoded, originalIndex };
}
const input = "banana";
const result = bwt(input);
console.log("Encoded: ", result.encoded);
console.log("Original Index: ", result.originalIndex);
