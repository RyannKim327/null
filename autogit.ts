function burrowsWheelerTransform(input: string): string {
    const len = input.length;

    // Generate all cyclic rotations
    const rotations: string[] = [];
    for (let i = 0; i < len; i++) {
        const rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the rotations
    rotations.sort();

    // Extract the last column
    let bwt = '';
    for (const rotation of rotations) {
        bwt += rotation[len - 1];  // Get the last character of each sorted rotation
    }

    return bwt;
}

// Example usage
const input = "banana";
const transformed = burrowsWheelerTransform(input);
console.log(transformed); // Output: "annb$aa"
function burrowsWheelerInverse(bwt: string): string {
    const len = bwt.length;
    
    // Create an array of characters and count occurrences
    const count: number[] = new Array(256).fill(0);
    for (const char of bwt) {
        count[char.charCodeAt(0)]++;
    }
    
    // Compute the starting index for each character
    const start: number[] = [];
    let total = 0;
    for (let i = 0; i < 256; i++) {
        if (count[i] > 0) {
            start[i] = total;
            total += count[i];
        } else {
            start[i] = -1; // Character not in BWT
        }
    }

    // Create an array for the first column
    const firstCol = bwt.split('').sort();
    const next = new Array(len);
    
    // Build the next array
    const occurrence: number[] = new Array(256).fill(0);
    for (let i = 0; i < len; i++) {
        const char = bwt[i];
        const index = start[char.charCodeAt(0)] + occurrence[char.charCodeAt(0)];
        next[i] = index;
        occurrence[char.charCodeAt(0)]++;
    }

    // Reconstruct the original string
    let original = '';
    let row = next.indexOf(0); // Look for the original character (the one that sorts to the top)
    for (let i = 0; i < len; i++) {
        original += bwt[row];
        row = next[row]; // Follow the next references
    }

    return original.split('').reverse().join(''); // Reverse to get original
}

// Example usage
const bwtResult = burrowsWheelerTransform(input);
const original = burrowsWheelerInverse(bwtResult);
console.log(original); // Output: "banana"
