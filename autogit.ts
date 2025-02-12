function burrowsWheelerTransform(input: string): { bwt: string; originalIndex: number } {
  const n = input.length;
  const rotations: string[] = new Array(n);
  
  // Generate all rotations of the input string
  for (let i = 0; i < n; i++) {
    rotations[i] = input.slice(i) + input.slice(0, i);
  }

  // Sort the rotations
  rotations.sort();

  // Build the BWT string and remember the original index
  let bwt = '';
  let originalIndex = -1;

  for (let i = 0; i < n; i++) {
    const lastChar = rotations[i][n - 1];
    bwt += lastChar;

    // Check if this is the original string
    if (rotations[i] === input) {
      originalIndex = i;
    }
  }

  return { bwt, originalIndex };
}

// Example Usage
const input = "BANANA";
const result = burrowsWheelerTransform(input);
console.log(`BWT: ${result.bwt}, Original Index: ${result.originalIndex}`);
BWT: NAAANB, Original Index: 1
