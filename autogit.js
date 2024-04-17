function burrowsWheelerTransform(input) {
    // Add EOF (end of file) character to input
    input += '$';

    // Generate all possible rotations of input
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the Burrows-Wheeler transformed string
    let transformedString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Find the index of the original input in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { transformedString, originalIndex };
}

// Example usage
let input = "hello world";
let result = burrowsWheelerTransform(input);

console.log("Original Input: " + input);
console.log("Burrows-Wheeler Transformed String: " + result.transformedString);
console.log("Original Index: " + result.originalIndex);
