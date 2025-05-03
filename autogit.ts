function burrowsWheelerTransform(input: string): string {
    const n = input.length;
    const rotations: string[] = new Array(n);

    // Create all rotations of the input string
    for (let i = 0; i < n; i++) {
        rotations[i] = input.slice(i) + input.slice(0, i);
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Construct the BWT result from the last column of the sorted rotations
    let bwtResult = '';
    for (let i = 0; i < n; i++) {
        bwtResult += rotations[i][n - 1];
    }

    return bwtResult;
}

// Usage example
const inputString = "banana";
const transformed = burrowsWheelerTransform(inputString);
console.log(transformed); // Output: "annb$aa" or similar depending on sorting
