function burrowsWheelerTransform(input: string): string {
    const n = input.length;
    
    // Step 1: Generate all rotations of the input
    const rotations: string[] = [];
    for (let i = 0; i < n; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Step 2: Sort the rotations
    rotations.sort();

    // Step 3: Extract the last column
    let bwtResult = '';
    for (const rotation of rotations) {
        bwtResult += rotation[n - 1]; // last character of each rotation
    }

    return bwtResult;
}

// Example Usage:
const input = "banana";
const result = burrowsWheelerTransform(input);
console.log(result); // Results in "annb$aa"
