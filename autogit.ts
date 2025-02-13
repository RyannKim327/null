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
        transformed += rotations[i][n - 1]; // Take the last character of each rotation
        if (rotations[i] === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed, index: originalIndex };
}

function inverseBurrowsWheelerTransform(transformed: string, index: number): string {
    const n = transformed.length;
    const table: string[] = new Array(n);

    // Initialize the table with empty strings
    for (let i = 0; i < n; i++) {
        table[i] = '';
    }

    // Rebuild the table
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            table[j] = transformed[j] + table[j];
        }
        // Sort the table
        table.sort();
    }

    // Return the original string
    return table[index];
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log("Transformed:", transformed);
console.log("Original Index:", index);

const original = inverseBurrowsWheelerTransform(transformed, index);
console.log("Original:", original);
