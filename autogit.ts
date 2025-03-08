function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
    const n = input.length;
    const table: string[] = [];

    // Create the table of rotations
    for (let i = 0; i < n; i++) {
        const rotated = input.slice(i) + input.slice(0, i);
        table.push(rotated);
    }

    // Sort the table
    table.sort();

    // Build the transformed string and find the original index
    let transformed = '';
    let originalIndex = 0;

    for (let i = 0; i < n; i++) {
        transformed += table[i][n - 1]; // Take the last character of each sorted rotation
        if (table[i] === input) {
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
            table[j] = transformed[j] + table[j]; // Prepend the character
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
