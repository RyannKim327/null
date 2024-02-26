function burrowsWheelerTransform(input) {
    // Generate cyclic permutations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }
    
    // Sort the cyclic permutations
    rotations.sort();
    
    // Extract the last characters of each rotation
    let bwt = rotations.map(rotation => rotation.slice(-1)).join('');
    
    return bwt;
}

// Test the BWT algorithm
let inputString = "hello";
let bwtResult = burrowsWheelerTransform(inputString);
console.log("BWT of '" + inputString + "' is: " + bwtResult);
