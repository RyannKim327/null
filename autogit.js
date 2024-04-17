function burrowsWheelerTransform(input) {
    // Generate all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation
    let transformed = rotations.map(rotation => rotation.slice(-1)).join('');

    return transformed;
}

function inverseBurrowsWheelerTransform(input) {
    // Transform the input string into a matrix of characters
    let matrix = input.split('').map(char => [char, '']);
    
    // Sort the matrix lexicographically by the first column
    matrix.sort();
    
    // Perform the inverse transformation
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result = matrix.map(row => row[0]).join('');
        matrix = matrix.map(row => [row[0], row[1]]).sort();
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][1] = result[j];
        }
    }

    return result;
}

// Example usage
let input = 'banana';
let transformed = burrowsWheelerTransform(input);
console.log('Transformed: ' + transformed);

let original = inverseBurrowsWheelerTransform(transformed);
console.log('Original: ' + original);
