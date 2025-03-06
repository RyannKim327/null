function burrowsWheelerTransform(input: string): { transformed: string, originalIndex: number } {
    // Step 1: Create a list of all the cyclic rotations of the input string
    const rotations = [];
    const n = input.length;

    for (let i = 0; i < n; i++) {
        const rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Step 2: Sort the rotations lexicographically
    rotations.sort();

    // Step 3: Create the BWT output and find the original index
    let bwtResult = '';
    let originalIndex = -1;

    for (let i = 0; i < n; i++) {
        const rotation = rotations[i];
        bwtResult += rotation[n - 1]; // Take the last character of each sorted rotation
        if (rotation === input) {
            originalIndex = i; // Store the index of the original string
        }
    }

    return { transformed: bwtResult, originalIndex };
}

function burrowsWheelerInverse(bwt: string, originalIndex: number): string {
    const n = bwt.length;
    const table: string[] = new Array(n).fill('');

    // Step 1: Reconstruct the original string's columns in sorted order
    for (let i = 0; i < n; i++) {
        table = table.map((row, index) => bwt[index] + row); // Prepend each character in bwt to the corresponding row
        table.sort(); // Sort the table
    }

    return table[originalIndex]; // The row corresponding to the original index will be the original string
}

// Example usage
const inputString = "banana";
const { transformed, originalIndex } = burrowsWheelerTransform(inputString);
console.log("BWT Result:", transformed); // Output the transformed string
console.log("Original Index:", originalIndex); // Output the index of the original string

const originalString = burrowsWheelerInverse(transformed, originalIndex);
console.log("Reconstructed Original String:", originalString); // Should match the inputString
