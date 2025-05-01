function burrowsWheelerTransform(input: string): { transformed: string; index: number } {
    const length = input.length;
    const rotations: string[] = [];

    // Generate all rotations of the input string
    for (let i = 0; i < length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort all rotations lexicographically
    rotations.sort();

    // The transformed string is the concatenation of the last characters of each rotation
    let transformed = '';
    let index = -1;
    for (let i = 0; i < length; i++) {
        transformed += rotations[i].charAt(length - 1);
        if (rotations[i] === input) {
            index = i;
        }
    }

    return { transformed, index };
}
const input = "banana";
const { transformed, index } = burrowsWheelerTransform(input);
console.log(`Transformed: ${transformed}`); // Should output: "annb$aa" normally but no $ here
console.log(`Index of original string in sorted rotations: ${index}`);
const inputWithEOF = input + '$';
