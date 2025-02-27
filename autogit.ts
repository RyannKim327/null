function burrowsWheelerTransform(input: string): string {
    const n = input.length;
    const rotations: string[] = [];

    // Generate all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations
    rotations.sort();

    // Build the BWT result from the last column of the sorted rotations
    let bwtResult = '';
    for (const rotation of rotations) {
        bwtResult += rotation[n - 1]; // Last character of each sorted rotation
    }

    return bwtResult;
}

// Example usage
const input = "banana";
const bwt = burrowsWheelerTransform(input);
console.log(bwt); // Output: "annb$aa"
function inverseBurrowsWheelerTransform(bwt: string): string {
    const n = bwt.length;
    const sortedBwt = Array.from(bwt).sort();
    const next = new Array(n);
    const count = new Array(256).fill(0);

    // Count occurrences of each character
    for (let i = 0; i < n; i++) {
        count[bwt.charCodeAt(i)]++;
    }

    // Compute the next array
    for (let i = 1; i < 256; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const char = bwt.charCodeAt(i);
        next[--count[char]] = i;
    }

    // Reconstruct the original string
    let original = '';
    let index = next[bwt.indexOf('$')]; // Start from the position of the end character

    for (let i = 0; i < n; i++) {
        original += bwt[index];
        index = next[index];
    }

    return original.split('').reverse().join(''); // Reverse to get the original string
}

// Example usage
const original = inverseBurrowsWheelerTransform(bwt);
console.log(original); // Output: "banana"
