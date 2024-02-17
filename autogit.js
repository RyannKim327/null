function burrowsWheelerTransform(input) {
    // Generate all cyclic rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the cyclic rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the BWT
    let bwt = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');

    return bwt;
}

function inverseBurrowsWheelerTransform(bwt) {
    // Reconstruct the sorted strings
    let sorted = bwt.split('').sort();

    // Initialize an array to store the combined characters
    let table = new Array(bwt.length).fill('');

    // Fill in the table by combining the sorted array with the BWT string
    for (let i = 0; i < bwt.length; i++) {
        for (let j = 0; j < bwt.length; j++) {
            table[j] = sorted[j] + table[j];
        }
        sorted.sort();
    }

    // Find the original string in the table
    let original = table.find(row => row.endsWith('\0'));

    return original.slice(0, -1);
}

// Test the Burrows-Wheeler Transform algorithm
let input = "hello world";
let bwt = burrowsWheelerTransform(input);
console.log("BWT: " + bwt);

let original = inverseBurrowsWheelerTransform(bwt);
console.log("Original: " + original);
