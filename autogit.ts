function burrowsWheelerTransform(input: string): string {
    const n = input.length;

    // Generate all rotations of `input`
    const rotations = new Array<string>(n);
    for (let i = 0; i < n; i++) {
        rotations[i] = input.slice(i) + input.slice(0, i);
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Build the BWT output
    let bwtResult = '';
    for (const rotation of rotations) {
        bwtResult += rotation[n - 1]; // Add the last character of each rotation
    }

    return bwtResult;
}

// Example usage
const input = "BANANA";
const bwtResult = burrowsWheelerTransform(input);
console.log(`BWT of "${input}" is "${bwtResult}"`);
BWT of "BANANA" is "ANNBAA"
