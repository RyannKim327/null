function burrowsWheelerTransform(input) {
    let matrix = [];

    // Generate all rotations of the input string
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        matrix.push(rotation);
    }

    // Sort the rotations lexicographically
    matrix.sort();

    // Get the last characters of each rotation to form the transformed string
    let result = matrix.map(rotation => rotation[input.length - 1]).join('');

    // Find the original string index in the sorted rotations
    let index = matrix.indexOf(input);

    return { transformed: result, originalIndex: index };
}

function inverseBurrowsWheelerTransform(input, originalIndex) {
    let matrix = [];

    // Construct the matrix
    for (let i = 0; i < input.length; i++) {
        matrix.push([]);
        for (let j = 0; j < input.length; j++) {
            matrix[i][j] = '';
        }
    }

    // Fill the matrix with the sorted characters
    for (let i = 0; i < input.length; i++) {
        let sortedChars = input.split('').sort();
        for (let j = 0; j < input.length; j++) {
            matrix[j][i] = sortedChars[j];
        }
        input = sortedChars.join('');
    }

    // Reconstruct the original string
    let original = '';
    let i = originalIndex;
    for (let j = 0; j < input.length; j++) {
        original = matrix[i].join('') + original;
        i = matrix[i].indexOf(original[0]);
    }

    return original;
}

// Example usage
let input = "banana";
let { transformed, originalIndex } = burrowsWheelerTransform(input);
console.log("Transformed String: " + transformed);

let original = inverseBurrowsWheelerTransform(transformed, originalIndex);
console.log("Original String: " + original);
