function burrowsWheelerTransform(input: string): { transformed: string, originalIndex: number } {
    // Step 1: Generate all rotations of the input string
    const rotations: string[] = [];
    const length = input.length;

    for (let i = 0; i < length; i++) {
        const rotated = input.slice(i) + input.slice(0, i);
        rotations.push(rotated);
    }

    // Step 2: Sort the rotations
    rotations.sort();

    // Step 3: Build BWT result and remember the index of the original string
    let bwtResult = '';
    let originalIndex = 0;

    for (let i = 0; i < length; i++) {
        const rotation = rotations[i];
        bwtResult += rotation[length - 1]; // Take the last character of each sorted rotation
        if (rotation === input) {
            originalIndex = i; // Store the index of the original input
        }
    }

    return { transformed: bwtResult, originalIndex };
}

// Example usage:
const input = "banana";
const result = burrowsWheelerTransform(input);
console.log(`BWT Result: ${result.transformed}, Original Index: ${result.originalIndex}`);
