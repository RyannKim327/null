function burrowsWheelerTransform(input: string): { transformed: string; index: number } {
    const n = input.length;

    // Generate all rotations of the input string
    const rotations: string[] = [];
    for (let i = 0; i < n; i++) {
        const rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Sort rotations lexicographically
    rotations.sort();

    // Find index of the original string in sorted rotations
    const index = rotations.indexOf(input);

    // Build the BWT result by taking the last character of each rotation
    const transformed = rotations.map(rotation => rotation.charAt(n - 1)).join('');

    return { transformed, index };
}
const input = "banana";
const result = burrowsWheelerTransform(input);
console.log(result); 
// { transformed: 'annb$aa' (if input includes the $ terminator), index: 3 }
const inputWithTerminator = input + "$";
const result = burrowsWheelerTransform(inputWithTerminator);
