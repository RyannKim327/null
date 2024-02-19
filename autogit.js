function burrowsWheelerTransform(input) {
    // Step 1: Create all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Step 2: Sort the rotations lexicographically
    rotations.sort();

    // Step 3: Extract the last characters of each rotation to form the transformed string
    let transformedString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Step 4: Find the original string index in the sorted rotations
    let originalIndex = rotations.findIndex(rotation => rotation === input);

    return { transformedString, originalIndex };
}

// Example usage
let input = "hello";
let { transformedString, originalIndex } = burrowsWheelerTransform(input);

console.log("Original String:", input);
console.log("Transformed String:", transformedString);
console.log("Original String Index:", originalIndex);
