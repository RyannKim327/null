function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
    const n = input.length;
    const table: string[] = [];

    // Create the table of cyclic shifts
    for (let i = 0; i < n; i++) {
        const shifted = input.slice(i) + input.slice(0, i);
        table.push(shifted);
    }

    // Sort the table
    table.sort();

    // Build the transformed string and find the original index
    let transformed = '';
    let originalIndex = 0;

    for (let i = 0; i < n; i++) {
        transformed += table[i][n - 1]; // Take the last character of each sorted row
        if (table[i] === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed, index: originalIndex };
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log("Transformed:", transformed);
console.log("Original Index:", index);
