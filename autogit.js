function burrowsWheelerTransform(input) {
    // Create a matrix to store all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the transformed string
    let transformedString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Find the index of the original input in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(transformedString, originalIndex) {
    let length = transformedString.length;
    let table = [];
  
    for (let i = 0; i < length; i++) {
        table[i] = [transformedString[i], i];
    }
  
    table.sort();
  
    let result = "";
    let row = table[originalIndex];
  
    for (let i = 0; i < length; i++) {
        result = row[0] + result;
        row = table[row[1]];
    }
  
    return result;
}

// Example usage
let input = "hello world";
let { transformedString, originalIndex } = burrowsWheelerTransform(input);
console.log("Burrows-Wheeler Transform: " + transformedString);
console.log("Original Index: " + originalIndex);

let originalInput = inverseBurrowsWheelerTransform(transformedString, originalIndex);
console.log("Inverse Burrows-Wheeler Transform: " + originalInput);
