function burrowsWheelerTransform(input: string): { bwt: string, index: number } {
    const n = input.length;
    const rotations = new Array<string>(n);

    // Generate all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations[i] = input.slice(i) + input.slice(0, i);
    }

    // Sort the rotations
    rotations.sort();

    // Build the BWT string and keep track of the original index
    let bwt = '';
    let originalIndex = -1;

    for (let i = 0; i < n; i++) {
        bwt += rotations[i][n - 1];
        // Find the original index of the first character
        if (rotations[i] === input) {
            originalIndex = i;
        }
    }

    return { bwt, index: originalIndex };
}

// Example usage
const inputString = "banana";
const { bwt, index } = burrowsWheelerTransform(inputString);
console.log(`BWT: ${bwt}, Original Index: ${index}`);
