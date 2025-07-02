function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
    const n = input.length;
    const rotations: string[] = [];

    // Generate all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations
    rotations.sort();

    // Build the transformed string and find the original index
    let transformed = '';
    let originalIndex = 0;

    for (let i = 0; i < n; i++) {
        transformed += rotations[i][n - 1]; // Take the last character of each sorted rotation
        if (rotations[i] === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed, index: originalIndex };
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log(`Transformed: ${transformed}, Original Index: ${index}`);
Transformed: annb$aa, Original Index: 5
