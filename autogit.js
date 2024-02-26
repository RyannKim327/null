function burrowsWheelerTransform(input) {
    // Create a list of all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the list of rotations
    rotations.sort();

    // Extract the last characters of each rotation to create the transformed string
    let transformedString = rotations.map(rotation => rotation[rotation.length - 1]).join('');

    // Find the index of the original string in the sorted rotations to get the original index
    let originalIndex = rotations.indexOf(input);

    return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(transformedString, originalIndex) {
    // Create an empty table to store the sorted characters
    let table = transformedString.split('').sort();

    // Create an empty array to store the characters of the original string
    let originalString = new Array(transformedString.length);

    // Fill in the table with the transformed string and sort it at the same time
    for (let i = 0; i < transformedString.length; i++) {
        originalString[i] = table[originalIndex];
        originalIndex = transformedString.indexOf(originalString[i], table.indexOf(originalString[i]) + 1);
    }

    return originalString.join('');
}

// Test the Burrows-Wheeler Transform algorithm
let input = "banana";
let { transformedString, originalIndex } = burrowsWheelerTransform(input);
console.log("Transformed string: ", transformedString);

let originalString = inverseBurrowsWheelerTransform(transformedString, originalIndex);
console.log("Original string: ", originalString);
