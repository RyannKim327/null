function burrowsWheelerTransform(inputString) {
    let matrix = [];
    
    // Generate all rotations of the input string
    for (let i = 0; i < inputString.length; i++) {
        let rotation = inputString.slice(i) + inputString.slice(0, i);
        matrix.push(rotation);
    }
    
    // Sort the rotations lexicographically
    matrix.sort();
    
    // Extract the last characters of each rotation
    let transformedString = matrix.map(rotation => rotation.slice(-1)).join('');
    
    return transformedString;
}

// Example usage
let inputString = "banana";
let bwtResult = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler transformed string:", bwtResult);
