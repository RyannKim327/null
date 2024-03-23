// Implement the Burrows-Wheeler Transform (BWT) algorithm
function burrowsWheelerTransform(input) {
    // Add the input string to a matrix
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let str = input.slice(i) + input.slice(0, i);
        matrix.push(str);
    }
    
    // Sort the matrix in lexicographical order
    matrix.sort();
    
    // Extract the last characters of each row to form the transformed string
    let transformedString = matrix.map(row => row[row.length - 1]).join('');
    
    return transformedString;
}

// Test the implementation
let inputString = "hello";
let bwtResult = burrowsWheelerTransform(inputString);
console.log("Input String:", inputString);
console.log("Burrows-Wheeler Transform Result:", bwtResult);
