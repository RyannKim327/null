function bwtTransform(input: string): { output: string, originalIndex: number } {
    const length = input.length;
    const rotations: string[] = [];

    // Generate all rotations of the input string
    for (let i = 0; i < length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations
    rotations.sort();

    // Build the BWT output and find the original index
    let bwtOutput = '';
    let originalIndex = -1;

    for (let i = 0; i < length; i++) {
        bwtOutput += rotations[i][length - 1];  // Last column of sorted rotations
        if (rotations[i] === input) {
            originalIndex = i; // Find the original index
        }
    }

    return { output: bwtOutput, originalIndex };
}

// Example usage
const input = "banana";
const { output: bwtResult, originalIndex } = bwtTransform(input);
console.log(`BWT Result: ${bwtResult}`);
console.log(`Original Index: ${originalIndex}`);
