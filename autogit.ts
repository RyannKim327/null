function burrowsWheelerTransform(input: string): { bwt: string; originalLength: number } {
    const len = input.length;
    const rotations: string[] = [];

    // Step 1: Generate all rotations of the input string
    for (let i = 0; i < len; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Step 2: Sort the rotations lexicographically
    rotations.sort();

    // Step 3: Construct the BWT output from the last column of the sorted rotations
    let bwt = '';
    for (const rotation of rotations) {
        bwt += rotation[len - 1];
    }

    // Step 4: Return the transformed string and the original length
    return { bwt, originalLength: len };
}

// Example usage:
const inputString = "banana";
const result = burrowsWheelerTransform(inputString);
console.log(`BWT: ${result.bwt}, Original Length: ${result.originalLength}`);
