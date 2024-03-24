// Function to perform Burrows-Wheeler Transform
function burrowsWheelerTransform(input) {
    // Create an array to store all rotations of the input string
    let rotations = [];
    
    // Generate all rotations of the input string
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of each rotation to create the transformed string
    let bwt = rotations.map(rot => rot.slice(-1)).join('');
    
    return bwt;
}

// Function to perform Inverse Burrows-Wheeler Transform
function inverseBurrowsWheelerTransform(bwt) {
    // Create an array to store the list of rotations
    let table = [];
    
    // Fill the table with empty strings
    for (let i = 0; i < bwt.length; i++) {
        table[i] = '';
    }
    
    // Fill the table by combining bwt string and sorting
    for (let i = 0; i < bwt.length; i++) {
        table = table.map((str, index) => bwt[index] + str).sort();
    }
    
    // Find the row that ends with the end-of-file character
    let row = table.find(str => str.endsWith('$'));
    
    // Extract the original string from the row
    let original = row.slice(0, -1);
    
    return original;
}

// Test the Burrows-Wheeler Transform algorithm
let inputString = 'banana$';
let bwtTransformed = burrowsWheelerTransform(inputString);
let inverseTransformed = inverseBurrowsWheelerTransform(bwtTransformed);

console.log('Original String:', inputString);
console.log('Burrows-Wheeler Transformed String:', bwtTransformed);
console.log('Inverse Burrows-Wheeler Transformed String:', inverseTransformed);
