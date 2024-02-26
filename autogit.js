function burrowsWheelerTransform(input) {
    let matrix = [];
    
    // Create a matrix with all rotations of the input string
    for (let i = 0; i < input.length; i++) {
        matrix.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the matrix lexicographically
    matrix.sort();

    // Extract the last characters of each row to get the transformed string
    let transformedString = matrix.map(row => row.slice(-1)).join('');

    return transformedString;
}

function burrowsWheelerInverseTransform(input) {
    let table = [];
    for (let i = 0; i < input.length; i++) {
        table[i] = { original: input[i], index: i };
    }

    table.sort((a, b) => a.original.localeCompare(b.original));

    let currentIndex = input.indexOf('$');
    let originalString = '';
    do {
        originalString += table[currentIndex].original;
        currentIndex = table[currentIndex].index;
    } while (currentIndex != input.indexOf('$'));

    return originalString;
}

// Test the Burrows-Wheeler Transform
let inputString = 'Hello World$';
let transformedString = burrowsWheelerTransform(inputString);
let originalString = burrowsWheelerInverseTransform(transformedString);

console.log("Original string: " + inputString);
console.log("Transformed string: " + transformedString);
console.log("Decoded string: " + originalString);
