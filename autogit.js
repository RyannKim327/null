function burrowsWheelerTransform(input) {
    // Generate all cyclic rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the Burrows-Wheeler transformed string
    let bwt = rotations.map(rot => rot[rot.length - 1]).join('');

    return bwt;
}

function inverseBurrowsWheelerTransform(bwt) {
    // Initialize an array to store the sorted characters
    let sortedChars = new Array(bwt.length);

    // Fill the sortedChars array with the characters from the BWT
    for (let i = 0; i < bwt.length; i++) {
        sortedChars = bwt.split('').sort().map((char, index) => char + sortedChars[index]);
    }

    // Find the original string in the sorted characters
    let index = sortedChars.findIndex(s => s.endsWith('$'));
    let original = sortedChars[index];

    return original.slice(0, original.length - 1);
}

// Example usage
let inputString = "banana";
let bwt = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler Transform: " + bwt);

let originalString = inverseBurrowsWheelerTransform(bwt);
console.log("Original string: " + originalString);
