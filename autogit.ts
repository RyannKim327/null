function burrowsWheelerTransform(input: string): { transformed: string, originalIndex: number } {
    const n = input.length;
    const rotations: string[] = new Array(n);

    // Step 1: Create all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations[i] = input.slice(i) + input.slice(0, i);
    }

    // Step 2: Sort the rotations
    rotations.sort();

    // Step 3: Create the transformed string and find the original index
    let transformed = '';
    let originalIndex = -1;

    for (let i = 0; i < n; i++) {
        transformed += rotations[i][n - 1]; // Take the last character of each sorted rotation
        if (rotations[i] === input) {
            originalIndex = i; // Track the index of the original string
        }
    }

    return { transformed, originalIndex };
}

// Example usage:
const input = "banana";
const { transformed, originalIndex } = burrowsWheelerTransform(input);
console.log("Transformed String: ", transformed);
console.log("Index of Original String: ", originalIndex);
