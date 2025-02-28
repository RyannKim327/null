function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
    const n = input.length;
    const rotations: string[] = [];

    // Generate all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations
    rotations.sort();

    // Build the BWT result and find the original index
    let bwtResult = '';
    let originalIndex = 0;

    for (let i = 0; i < n; i++) {
        const rotation = rotations[i];
        bwtResult += rotation[n - 1]; // Take the last character of each sorted rotation
        if (rotation === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed: bwtResult, index: originalIndex };
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log("Transformed:", transformed);
console.log("Original Index:", index);
