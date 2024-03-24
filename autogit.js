function bwt(input) {
    let rotations = generateCyclicRotations(input);
    rotations.sort();
    let transformedString = rotations.map(rot => rot.charAt(rot.length - 1)).join('');
    return transformedString;
}

function generateCyclicRotations(input) {
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }
    return rotations;
}

// Test the BWT function
let inputString = "banana";
let bwtResult = bwt(inputString);
console.log("Original String:", inputString);
console.log("BWT Result:", bwtResult);
