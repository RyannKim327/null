// Burrows-Wheeler Transform implementation
function burrowsWheelerTransform(input) {
    // Generate a list of all rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the Burrows-Wheeler transformed string
    let transformed = rotations.map(rotation => rotation.slice(-1)).join("");

    // Find the index of the original string in the sorted rotations to get the index of the original string in the transformed string
    let originalIndex = rotations.indexOf(input);

    return { transformed, originalIndex };
}

// Example usage
let inputString = "banana";
let { transformed, originalIndex } = burrowsWheelerTransform(inputString);
console.log("Original String: " + inputString);
console.log("Transformed String: " + transformed);
console.log("Original Index: " + originalIndex);
