function burrowsWheelerTransform(input: string): string {
    // Append a special end-of-string character ('$') to handle uniqueness
    const str = input + '$';

    // Step 1: Generate all rotations of the string
    const rotations: string[] = [];
    for (let i = 0; i < str.length; i++) {
        rotations.push(str.slice(i) + str.slice(0, i));
    }

    // Step 2: Sort the rotations lexicographically
    rotations.sort();

    // Step 3: Extract the last column of the sorted rotations
    let bwtResult = '';
    for (const rotation of rotations) {
        bwtResult += rotation[rotation.length - 1];
    }

    return bwtResult;
}
function inverseBurrowsWheelerTransform(bwt: string): string {
    const n = bwt.length;

    // Step 1: Create a list of tuples containing the character and its index
    const tuples = bwt.split('').map((char, index) => ({ char, index }));

    // Step 2: Sort the tuples lexicographically by the character
    tuples.sort((a, b) => a.char.localeCompare(b.char));

    // Step 3: Reconstruct the original string
    let original = '';
    let currentIndex = 0;

    // Find the row that ends with '$' (the end-of-string marker)
    for (let i = 0; i < n; i++) {
        if (bwt[i] === '$') {
            currentIndex = i;
            break;
        }
    }

    // Follow the indices to reconstruct the string
    for (let i = 0; i < n - 1; i++) { // Exclude the last '$'
        original = bwt[currentIndex] + original;
        currentIndex = tuples[currentIndex].index;
    }

    return original;
}
// Forward BWT
const input = "banana";
const bwtResult = burrowsWheelerTransform(input);
console.log("BWT Result:", bwtResult); // Output: "annb$aa"

// Inverse BWT
const original = inverseBurrowsWheelerTransform(bwtResult);
console.log("Original String:", original); // Output: "banana"
