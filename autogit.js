function burrowsWheelerTransform(str) {
    // Generate all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < str.length; i++) {
        rotations.push(str.substring(i) + str.substring(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the Burrows-Wheeler transformed string
    let bwt = rotations.map((rotation) => rotation.charAt(rotation.length - 1)).join('');

    return bwt;
}

function burrowsWheelerInverseTransform(bwt) {
    let table = [];
    for (let i = 0; i < bwt.length; i++) {
        table.push({original: '', transformed: ''});
    }

    // Fill the table with sorted transformed and original strings
    for (let i = 0; i < bwt.length; i++) {
        table.sort((a, b) => a.original.localeCompare(b.original) || a.transformed.localeCompare(b.transformed));
        table.forEach((row, j) => {
            row.original = bwt.charAt(j) + row.original;
            row.transformed = table[j].original;
        });
    }

    // Find the original string
    let original = table.find((row) => row.transformed.endsWith('$')).original;

    return original.substring(0, original.length - 1);
}

// Example usage
let inputString = 'banana$';
let bwt = burrowsWheelerTransform(inputString);
console.log('Burrows-Wheeler transformed string:', bwt);

let originalString = burrowsWheelerInverseTransform(bwt);
console.log('Original string:', originalString);
