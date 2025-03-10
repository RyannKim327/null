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

function inverseBurrowsWheelerTransform(bwt: string, originalIndex: number): string {
    const n = bwt.length;
    const sortedBwt = bwt.split('').sort().join('');
    const next = new Array(n);

    // Create the next array
    const count: { [key: string]: number } = {};
    for (let i = 0; i < n; i++) {
        const char = bwt[i];
        count[char] = (count[char] || 0) + 1;
        next[i] = count[char] - 1; // Store the count of characters
    }

    // Create the first column and the next array
    const firstColumn: { [key: string]: number } = {};
    for (let i = 0; i < n; i++) {
        const char = sortedBwt[i];
        firstColumn[char] = (firstColumn[char] || 0) + 1;
        next[i] += firstColumn[char] - 1; // Update next array with the index in the sorted array
    }

    // Reconstruct the original string
    let original = '';
    let currentIndex = originalIndex;

    for (let i = 0; i < n; i++) {
        original += bwt[currentIndex];
        currentIndex = next[currentIndex];
    }

    return original.split('').reverse().join(''); // Reverse to get the original string
}

// Example usage
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log("Transformed:", transformed);
console.log("Original Index:", index);

const original = inverseBurrowsWheelerTransform(transformed, index);
console.log("Original:", original);
