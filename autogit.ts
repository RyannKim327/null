function burrowsWheelerTransform(input: string): { transformed: string, originalIndex: number } {
    // Generate all rotations of the input string
    const rotations: string[] = [];
    const len = input.length;

    for (let i = 0; i < len; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations
    rotations.sort();

    // Build the transformed string and find the original index
    let transformed = '';
    let originalIndex = 0;

    for (let i = 0; i < len; i++) {
        const rotation = rotations[i];
        transformed += rotation[len - 1]; // Last character of each sorted rotation
        if (rotation === input) {
            originalIndex = i; // Save the index of the original string
        }
    }

    return { transformed, originalIndex };
}

// Example usage
const inputString = "banana";
const { transformed, originalIndex } = burrowsWheelerTransform(inputString);

console.log("Transformed String:", transformed); // Output: "annb$aa"
console.log("Original Index:", originalIndex);   // Index of the input in the sorted rotations
