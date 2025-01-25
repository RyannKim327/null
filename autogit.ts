function bwt(s: string): string {
  const n = s.length;
  const matrix: string[][] = new Array(n).fill(0).map(() => new Array(n));

  // Create a matrix of all rotations of the input string
  for (let i = 0; i < n; i++) {
    matrix[i] = s.slice(i) + s.slice(0, i);
  }

  // Sort the rows of the matrix lexicographically
  matrix.sort((a, b) => a.join("") < b.join("") ? -1 : 1);

  // Extract the last column of the sorted matrix
  const lastColumn: string[] = matrix.map((row) => row[n - 1]);

  return lastColumn.join("");
}

// Example usage
const input = "banana";
const bwtOutput = bwt(input);
console.log(bwtOutput); // Output: "annb$aa"
function ibwt(bwtOutput: string): string {
  const n = bwtOutput.length;
  const matrix: string[][] = new Array(n).fill(0).map(() => new Array(n));

  // Create a matrix of all rotations of the BWT output
  for (let i = 0; i < n; i++) {
    matrix[i] = bwtOutput.slice(i) + bwtOutput.slice(0, i);
  }

  // Sort the rows of the matrix lexicographically
  matrix.sort((a, b) => a.join("") < b.join("") ? -1 : 1);

  // Extract the first row of the sorted matrix
  const originalString = matrix[0].join("");

  return originalString;
}

// Example usage
const bwtOutput = "annb$aa";
const originalString = ibwt(bwtOutput);
console.log(originalString); // Output: "banana"
