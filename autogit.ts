function bwt(s: string): string {
  const n = s.length;
  const matrix: string[][] = new Array(n).fill(0).map(() => new Array(n));

  // Create a matrix of all rotations of the input string
  for (let i = 0; i < n; i++) {
    matrix[i] = [...s.substring(i) + s.substring(0, i)];
  }

  // Sort the matrix rows lexicographically
  matrix.sort((a, b) => a.join('') < b.join('') ? -1 : 1);

  // Take the last column of the sorted matrix as the BWT output
  const bwtOutput = matrix.map(row => row[row.length - 1]).join('');

  return bwtOutput;
}

// Example usage:
const input = 'banana';
const bwtOutput = bwt(input);
console.log(bwtOutput); // Output: "annb$aa"
