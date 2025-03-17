function burrowsWheelerTransform(input: string): { transformed: string, index: number } {
    const n = input.length;
    const table: string[] = [];

    // Create the table of rotations
    for (let i = 0; i < n; i++) {
        table.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the table
    table.sort();

    // Build the BWT result and find the original index
    let bwtResult = '';
    let originalIndex = 0;

    for (let i = 0; i < n; i++) {
        bwtResult += table[i][n - 1]; // Take the last character of each sorted rotation
        if (table[i] === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed: bwtResult, index: originalIndex };
}

function burrowsWheelerInverse(bwt: string, index: number): string {
    const n = bwt.length;
    const table: string[] = new Array(n);

    // Create the table of characters
    for (let i = 0; i < n; i++) {
        table[i] = bwt[i];
    }

    // Sort the table and build the next array
    const sortedTable = table.slice().sort();
    const next: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        next[i] = sortedTable.indexOf(table[i], next[i - 1] || 0);
    }

    // Reconstruct the original string
    let original = '';
    for (let i = 0; i < n; i++) {
        original += bwt[index];
        index = next[index];
    }

    return original.split('').reverse().join(''); // Reverse to get the original string
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log("Transformed:", transformed);
console.log("Original Index:", index);

const original = burrowsWheelerInverse(transformed, index);
console.log("Original:", original);
