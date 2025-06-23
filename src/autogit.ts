function burrowsWheelerTransform(input: string): string {
    // Step 1: Add the end-of-string marker
    const endMarker = '$';
    if (input.includes(endMarker)) {
        throw new Error("Input string must not contain the end marker '$'");
    }
    const strWithMarker = input + endMarker;

    // Step 2: Generate all rotations
    const rotations: string[] = [];
    for (let i = 0; i < strWithMarker.length; i++) {
        const rotation = strWithMarker.slice(i) + strWithMarker.slice(0, i);
        rotations.push(rotation);
    }

    // Step 3: Sort rotations lexicographically
    rotations.sort();

    // Step 4: Extract the last column
    let lastColumn = '';
    for (const rotation of rotations) {
        lastColumn += rotation[rotation.length - 1];
    }

    // Step 5: Return the transformed string
    return lastColumn;
}

// Example usage
const input = "banana";
const transformed = burrowsWheelerTransform(input);
console.log(`BWT of "${input}" is "${transformed}"`);
