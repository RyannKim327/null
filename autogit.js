function burrowsWheelerTransform(input) {
    let table = [];
    
    // Generate all rotations of the input string
    for (let i = 0; i < input.length; i++) {
        let rotated = input.slice(i) + input.slice(0, i);
        table.push(rotated);
    }
    
    // Sort the rotations
    table.sort();
    
    // Extract the last characters of the sorted rotations to get the transformed string
    let transformed = table.map(rotation => rotation.slice(-1)).join('');
    
    return transformed;
}

// Test the implementation
let inputString = "banana";
let transformedString = burrowsWheelerTransform(inputString);
console.log("Input: " + inputString);
console.log("Transformed: " + transformedString);
