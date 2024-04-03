function burrowsWheelerTransform(inputString) {
    // Add EOF (End-of-File) marker to the input string
    inputString += '$';
    
    // Generate all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < inputString.length; i++) {
        rotations.push(inputString.slice(i) + inputString.slice(0, i));
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of each sorted rotation
    let transformedString = rotations.map(rotation => rotation.slice(-1)).join('');
    
    return transformedString;
}

// Test the implementation
let inputString = 'banana';
let transformedString = burrowsWheelerTransform(inputString);
console.log(transformedString);
