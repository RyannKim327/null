function burrowsWheelerTransform(input) {
    let matrix = [];

    // Generate all rotations of the input string and store them in the matrix
    for (let i = 0; i < input.length; i++) {
        matrix.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the matrix lexicographically
    matrix.sort();

    // Extract the last characters of each row in the matrix to create the transformed string
    let transformedString = matrix.map(row => row.slice(-1)).join('');

    // Find the index of the original input string in the sorted matrix
    let originalIndex = matrix.findIndex(row => row === input);

    return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(input, originalIndex) {
    let table = [];

    // Generate the table structure from the transformed input
    for (let i = 0; i < input.length; i++) {
        table.push({ originalIndex: i, character: input[i] });
    }

    // Sort the table lexicographically
    table.sort((a, b) => a.character.localeCompare(b.character));

    // Reconstruct the original string by iterating through the table
    let originalString = '';
    let nextIndex = originalIndex;
    for (let i = 0; i < input.length; i++) {
        originalString = table[nextIndex].character + originalString;
        nextIndex = table[nextIndex].originalIndex;
    }

    return originalString;
}

// Example usage
let inputString = "hello";
let { transformedString, originalIndex } = burrowsWheelerTransform(inputString);
let originalString = inverseBurrowsWheelerTransform(transformedString, originalIndex);

console.log("Original Input:", inputString);
console.log("Transformed String:", transformedString);
console.log("Original String:", originalString);
