function burrowsWheelerTransform(inputString) {
    let rotations = [];

    // Generate all rotations of the input string
    for (let i = 0; i < inputString.length; i++) {
        let rotation = inputString.slice(i) + inputString.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of the sorted rotations
    let outputString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Return the Burrows-Wheeler transformed string and the index of the original string
    return { transformedString: outputString, index: rotations.indexOf(inputString) };
}

function inverseBurrowsWheelerTransform(transformedString, index) {
    // Initialize an array to store the sorted transformed string
    let sortedTransformed = transformedString.split('').sort();

    // Create an array to store the characters of the inverse transformation
    let result = new Array(transformedString.length);

    // Loop through the transformed string to build the inverse transformation
    for (let i = 0; i < transformedString.length; i++) {
        // Find the index of the character in the sorted transformed string
        let charIndex = sortedTransformed.indexOf(transformedString[i]);

        // Place the character in the result array at the index found in the sorted transformed string
        result[charIndex] = transformedString[i];

        // Update the index for the next iteration
        sortedTransformed[charIndex] = null;
    }

    // Start with the character at the specified index
    let outputString = result[index];

    // Add characters to the output string until we reach the original string length
    while (outputString.length < transformedString.length) {
        // Find the index of the character in the result array
        let charIndex = sortedTransformed.indexOf(result[charIndex]);
        // Add the character to the output string
        outputString += result[charIndex];
    }

    return outputString;
}

// Example usage
let inputString = "hello world";
let transformed = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler transformed string:", transformed.transformedString);
console.log("Index of original string:", transformed.index);

let inverseTransformed = inverseBurrowsWheelerTransform(transformed.transformedString, transformed.index);
console.log("Inverse Burrows-Wheeler transformed string:", inverseTransformed);
