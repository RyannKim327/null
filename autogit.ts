function burrowsWheelerTransform(input: string): string {
  const length = input.length;
  // Generate all rotations of the input string
  const rotations: string[] = [];
  for (let i = 0; i < length; i++) {
    rotations.push(input.slice(i) + input.slice(0, i));
  }
  // Sort the rotations lexicographically
  rotations.sort();
  // Take the last character of each rotation to form the BWT string
  const bwt = rotations.map(rotation => rotation.charAt(length - 1)).join('');
  return bwt;
}
const str = "banana$";
const bwt = burrowsWheelerTransform(str);
console.log(bwt);  // Output: "annb$aa"
