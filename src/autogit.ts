function burrowsWheelerTransform(input: string): string {
    // Step 1: Append a special end-of-string marker ('$') if not already present
    const text = input + '$';

    // Step 2: Generate all cyclic rotations of the string
    const rotations: string[] = [];
    for (let i = 0; i < text.length; i++) {
        rotations.push(text.slice(i) + text.slice(0, i));
    }

    // Step 3: Sort the rotations lexicographically
    rotations.sort();

    // Step 4: Extract the last column of the sorted rotations
    let lastColumn = '';
    for (const rotation of rotations) {
        lastColumn += rotation[rotation.length - 1];
    }

    return lastColumn;
}

// Example usage:
const input = "banana";
const transformed = burrowsWheelerTransform(input);
console.log(`BWT of "${input}" is "${transformed}"`);
